import React from 'react';

const MyListingPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Header */}
                <h2 className="text-3xl font-bold text-center mb-10 text-white">
                    My Car Listings
                </h2>

                {/* Table Container */}
                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="py-4 px-6 font-semibold text-gray-200">Car Name</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Category</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Rent Price</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Status</th>
                                <th className="py-4 px-6 font-semibold text-gray-200 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Example Row */}


                            <tr className="border-b border-gray-700 hover:bg-gray-700/40 transition duration-200">
                                <td className="py-4 px-6">BMW X5</td>
                                <td className="py-4 px-6">SUV</td>
                                <td className="py-4 px-6">$120 / day</td>
                                <td className="py-4 px-6">
                                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-300 text-white">
                                        Booked
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-center">
                                    <div className="flex justify-center gap-3">
                                        <button className="px-4 py-2 rounded-lg btn-outline border-2 border-teal-700  hover:bg-teal-300 transition font-semibold text-white">
                                            Update
                                        </button>
                                        <button className="px-4 py-2 rounded-lg btn-outline border-2 border-red-500  hover:bg-red-500 transition font-semibold text-white">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default MyListingPage;