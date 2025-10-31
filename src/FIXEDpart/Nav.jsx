import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Nav = () => {
    const Links = <>
        <li>
            <NavLink to="/" style={({ isActive }) => isActive ? { borderBottom: '2px solid white' } : undefined}>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/plants" style={({ isActive }) => isActive ? { borderBottom: '2px solid white' } : undefined}>
                Plants
            </NavLink>
        </li>
        <li>
            <NavLink to="/profile" style={({ isActive }) => isActive ? { borderBottom: '2px solid white' } : undefined}>
                My Profile
            </NavLink>
        </li>
    </>

    const { user, LogOut } = use(AuthContext)
    const navigate = useNavigate();

    const habdleLogOut = () => {
        LogOut().then(() => {
            navigate("/login");
        }).catch((error) => {
            console.log(error.message)
        });
    }

    const demoPhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    return (
        <div id="NavBar">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img className='h-full mr-2' src="https://cdn-icons-png.freepik.com/256/6487/6487494.png?semt=ais_white_label" alt="logo" />
                        GreenNest
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">

                    <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
                        
                        <img className='w-full h-full object-center' src={user?.photoURL ? user.photoURL : demoPhoto} alt="" />

                    </div>

                    {
                        user ? <button onClick={habdleLogOut} className='btn'>Log Out</button> : <NavLink to='/login' className="btn">Log In</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;


{/* <div className="navbar-end gap-2">

    <div className='h-[50px] w-[50px] rounded-full overflow-hidden'>
        <img className='w-full h-full object-center' src={user?.photoURL ? user.photoURL : demoPhoto} alt="" />

    </div>

    {
        user ? <button onClick={habdleLogOut} className='btn'>Log Out</button> : <NavLink to='/login' className="btn">Log In</NavLink>
    }
</div> */}