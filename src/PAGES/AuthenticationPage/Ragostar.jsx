import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Ragostar = () => {

    const { user, updateUser, googleLogin } = use(AuthContext)

    const { createUser, setUser } = use(AuthContext);
    const [error, setError] = useState('');
    const [validpass, setValidpass] = useState('');


    const navigate = useNavigate();
    const handleRagistar = (e) => {
        e.preventDefault();
        const form = e.target;

        const NAME = form.name.value;
        const PHOTO = form.photourl.value;

        const EMAIL = form.email.value;
        const PASSWORD = form.password.value;

        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        const passwordErrorMessage = "Password must be at least 8 characters long and include: one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).";


        if (!strongPasswordRegex.test(PASSWORD)) {
            setValidpass(passwordErrorMessage)
            return;
        } else {
            setValidpass('')
        }

        createUser(EMAIL, PASSWORD)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: NAME, photoURL: PHOTO }).then(() => {
                    // Profile updated!
                    // ...
                    setUser({ ...user, displayName: NAME, photoURL: PHOTO })

                }).catch(() => {
                    setUser(user)
                });


                navigate("/");
            }).catch(() => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // console.log(errorCode, errorMessage)
                setError("This email account is already used! Tyr another...")
            });

        if (user) {
            form.reset()
        }
    }


    //google sign up
    const provider = new GoogleAuthProvider();
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
    //google sign up end

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };


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
                                    <input type="text" className="input" placeholder="Your Name" name='name' required />
                                    {/* Photo URL */}
                                    <label className="label">Photo URL</label>
                                    <input type="url" className="input" placeholder="Photo URL" name='photourl' required />
                                    {/* Email */}
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' required />

                                    {/* Password */}
                                    <label className="label">Password</label>
                                    <div className='relative'>
                                        <input type={showPassword ? "text" : "password"} className="input" placeholder="Password" name='password' required />
                                        <span className='h-full absolute top-0 p-3 right-4 cursor-pointer' onClick={togglePassword}>
                                            {showPassword ? <FaEyeSlash size={17} /> : <FaEye size={17} />}
                                        </span>
                                    </div>


                                    {
                                        error ? <p className='text-red-600 font-bold text-center'>{error}</p> : ""
                                    }
                                    {
                                        validpass ? <p className='text-red-600 font-bold text-center'>{validpass}</p> : ""
                                    }


                                    <button type='submit' className="btn btn-neutral mt-4">Ragister</button>
                                </fieldset>

                            </form>
                            <button onClick={ContinueWithGoogle} className="btn btn-neutral"><FcGoogle size={24} /> Ragister with Google</button>

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