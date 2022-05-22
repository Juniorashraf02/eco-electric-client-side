import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
// import { Helmet } from 'react-helmet-async';
import { SiGoogle } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub, useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState({
        email: '',
        password: '',
        other: '',
    });


    // handler for email change
    const handleEmailChange = e => {
        const inputEmail = e.target.value;
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(inputEmail);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: inputEmail });
            setErrorMessage({ ...errorMessage, email: '' })
        } else {
            setErrorMessage({ ...errorMessage, email: 'Invalid email' });
            setUserInfo({ ...userInfo, email: '' });
        }
    }

    // handler for password change
    const handlePasswordChange = e => {
        const password = e.target.value;
        const passwordRegex = /.{5,}/;
        const validPassword = passwordRegex.test(password);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: password });
            setErrorMessage({ ...errorMessage, password: '' });
        } else {
            setErrorMessage({ ...errorMessage, password: 'At least 6 characters required!' });
            setUserInfo({ ...userInfo, password: '' });
        }
    }

    // handler for submit btn
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleSubmitBtn = e => {

        createUserWithEmailAndPassword(userInfo.email, userInfo.password);


        e.preventDefault();
    }

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [user, loading, authError] = useAuthState(auth);

    useEffect(() => {
        const error = emailError || googleError || fbError || gitError || authError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("something went wrong")
            }
        }
    }, [emailError, googleError, fbError, gitError, authError]);



    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user || googleUser || gitUser || fbUser || emailUser) {
        navigate(from, { replace: true });
    }
    if (loading || googleLoading || fbLoading || gitLoading || emailLoading) {
        return <div className="mt-20 flex justify-center items-center space-x-2">
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-600" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-purple-500
            " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-green-500
            " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="
            spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0
              text-yellow-500
            " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-blue-300" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-gray-300" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }
    return (
        <div className='px-6 max-w-md mx-auto mb-5'>
            {/* <Helmet>
                <title>Sign Up - warehoue mangement</title>
            </Helmet> */}
            <div className="p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto my-5">
                <form onSubmit={handleSubmitBtn}>

                    <p className='text-3xl font-bold text-blue-700'>Sign up now</p>
                    <div className="grid grid-cols-2 gap-4 mt-5">



                        {/* First name input field starts */}
                        <div className=" mb-6">
                            <input type="text" className="w-full px-3 py-1.5 text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="" placeholder="First name" required />
                        </div>
                        {/* First name input field ends */}


                        {/* Last name input field starts */}
                        <div className=" mb-6">
                            <input type="text" className=" w-full px-3 py-1.5  font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="" placeholder="Last name" required />
                        </div>
                        {/* Last name input field ends */}


                    </div>


                    {/* input for email address starts */}
                    <div className=" mb-6">
                        <input type="email" className="w-full px-3 py-1.5 font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="" placeholder="Email address" name="email" autoComplete="off" required onChange={handleEmailChange} />
                        {errorMessage.email && <p className="text-sm text-red-400">{errorMessage.email}</p>}
                    </div>
                    {/* input for email address ends */}


                    {/* input for passward  starts */}
                    <div className=" mb-6">
                        <input type="password" className=" w-full px-3 py-1.5  font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126" placeholder="Password" name='password' autoComplete="off" onChange={handlePasswordChange} />
                        {errorMessage?.password && <p className="text-sm text-red-400">{errorMessage.password}</p>}
                    </div>
                    {/* input for passward  ends */}





                    {/* sign up btn starts */}
                    <button type="submit" className=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >Sign up</button>
                    {/* sign up btn ends */}



                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Already have an account?
                        <Link
                            to="/login"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out mb-64">Log In
                        </Link>
                    </p>

                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" >
                        <p className="text-center font-semibold mx-4 mb-0 text-gray-400">Or</p>
                    </div>



                    {/* google sign up starts */}
                    <button onClick={() => signInWithGoogle()} type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <SiGoogle className="text-xl pr-1"></SiGoogle>
                        Sign up with Google
                    </button>
                    {/* google sign up ends */}


                    {/* facebook sign up starts */}
                    <button onClick={() => signInWithFacebook()} type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                        <FaFacebookF className="text-xl pr-1"></FaFacebookF>
                        Sign up with Facebook
                    </button>
                    {/* facebook sign up ends */}


                    {/* GitHub sign up starts */}
                    <button onClick={() => signInWithGithub()} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">

                        <BsGithub className="text-xl pr-1"></BsGithub>
                        Sign up with GitHub
                    </button>
                    {/* GitHub sign up ends */}




                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Signup;