import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../../Loader/Loading';
import { GoogleAuthProvider } from 'firebase/auth';

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import app from "../Firebase/firebase.config";


const Login = () => {

    const { LogIn, googleLogin, setUser } = use(AuthContext)
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const [error, setError] = useState('')

    const location = useLocation();




    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const EMAIL = form.email.value;
        const PASSWORD = form.password.value;


        LogIn(EMAIL, PASSWORD)
            .then((userCredential) => {

                const user = userCredential.user;
                setUser(user)
                navigate(`${location.state ? location.state : "/"}`);

            })
            .catch((error) => {
                // const errorMessage = error.message;
                setError(error.message)
            });
    }

    const ContinueWithGoogle = () => {
        googleLogin(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setUser(user)
            navigate(`${location.state ? location.state : "/"}`);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch(() => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            setError("Wrong password")
        });
    }



    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='max-w-[1140px] mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                        <div className="card-body">

                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">

                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' required />

                                    <label className="label">Password</label>
                                    <div className='relative'>
                                        <input type={showPassword ? "text" : "password"} className="input" placeholder="Password" name='password' required />
                                        <span className='h-full absolute top-0 p-3 right-4 cursor-pointer' onClick={togglePassword}>
                                            {showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
                                        </span>
                                    </div>

                                    <div><a className="link link-hover">Forgot password?</a></div>

                                    {
                                        error ? <p className='text-red-600 font-bold text-center'>{error}</p> : ""
                                    }

                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>

                            </form>

                            <button className="btn btn-neutral" onClick={ContinueWithGoogle}><FcGoogle size={24} /> Login with Google</button>
                            <p>
                                Don`t have an account? <span className='underline text-green-400 font-semibold'><NavLink to='/ragistar'>Ragister</NavLink></span>
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;