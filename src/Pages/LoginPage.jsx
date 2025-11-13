import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const { logIn, setUser, googleSignIn } = use(AuthContext)

    const location = useLocation()
    // console.log(user)
    const navigate = useNavigate()

    // google log in 
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your have logged in successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state || "/")
            })
            .catch(err => {
                toast.error(err.message)
            })
    }


    // log in with email and password 
    const handleLogInWithEmail = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        console.log({ email, password })
        logIn(email, password)
            .then(result => {
                if (result) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your have logged in successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate(location.state || "/")
            })
            .catch(err => {
                toast.error(err.message)
            })
    }


    return (
        <div className=" flex items-center py-10 justify-center px-4">
            <title>Log-in</title>
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
                {/* Header */}
                <h2 className="text-3xl font-bold text-center mb-2  ">
                    <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                        Welcome Back
                    </span>
                </h2>
                <p className="text-gray-400 text-center mb-8">
                    Login to continue your RentWheels journey
                </p>

                {/* Login Form */}
                <form onSubmit={handleLogInWithEmail}
                    className="space-y-5">
                    <div>
                        <label className="block text-gray-300 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Google Login */}
                <div className="mt-6 text-center">
                    <p className="text-gray-400 mb-3">Or sign in with</p>
                    <button
                        onClick={handleGoogleLogIn}
                        className="btn w-full bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

                {/* Register Link */}
                <p className="text-gray-400 text-center mt-6">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-400 hover:underline">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;