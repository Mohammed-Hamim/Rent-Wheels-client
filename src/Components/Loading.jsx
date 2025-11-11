import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="flex flex-col items-center">
                {/* <!-- Spinner --> */}
                <div
                    className="w-12 h-12 border-4 border-t-transparent border-indigo-500 rounded-full animate-spin"
                ></div>

                {/* <!-- Optional text --> */}
                <p className="mt-3 text-gray-300 text-sm">Loading...</p>
            </div>
        </div>

    );
};

export default Loading;