import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-6 text-center">
            <div className="max-w-md">
                <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 mb-4">
                    404
                </h1>
                <h2 className="text-3xl font-bold mb-2">Oops! Page Not Found</h2>
                <p className="text-gray-400 mb-8">
                    The page you’re looking for doesn’t exist or has been moved.
                    Don’t worry — let’s get you back on the road.
                </p>
                <a
                    href="/"
                    className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    ⬅ Back to Home
                </a>
            </div>
        </div>

    );
};

export default ErrorPage;