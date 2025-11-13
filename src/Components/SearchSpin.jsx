import React from 'react';

const SearchSpin = () => {
    return (
        <div className="flex items-center justify-center min-h-50">
            <div className="flex flex-col items-center">

                <div
                    className="w-12 h-12 border-4 border-t-transparent border-primary rounded-full animate-spin"
                ></div>

                <p className="mt-3 text-gray-300 text-sm">Searching...</p>
            </div>
        </div>
    );
};

export default SearchSpin;