import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Ragostar = () => {


    const handleRagistar = (e) => {
        e.preventDefault();
        const form = e.target;

        const EMAIL = form.email.value;
        const PASSWORD = form.password.value;

    }


    return (
        <div className='max-w-[1140px] mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Ragister now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <div className="card-body">

                            <form onSubmit={handleRagistar}>
                                <fieldset className="fieldset">
                                    {/* Name */}
                                     <label className="label">Name</label>
                                    <input type="text" className="input" placeholder="Your Name" name='name' />
                                    {/* Photo URL */}
                                     <label className="label">Photo URL</label>
                                    <input type="url" className="input" placeholder="Photo URL" name='photourl' />
                                    {/* Email */}
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' required />
                                    {/* Password */}
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='password' required />

                                    <div><a className="link link-hover">Forgot password?</a></div>

                                    <button type='submit' className="btn btn-neutral mt-4">Ragister</button>
                                </fieldset>
                            </form>
                            <button className="btn btn-neutral"><FcGoogle size={24} /> Ragister with Google</button>
                            
                            <p>
                                Already have an account? <span className='underline text-green-400 font-semibold'><NavLink to='/login'>Log In</NavLink></span>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ragostar;