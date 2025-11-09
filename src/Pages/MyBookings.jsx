import React from 'react';

const MyBookings = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl font-bold text-center mb-10 text-white">My Bookings</h2>

                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="py-4 px-6 font-semibold text-gray-200">Car Name</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Category</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Rent Price</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Location</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-700 hover:bg-gray-700/40 transition">
                                <td className="py-4 px-6">Tesla Model 3</td>
                                <td className="py-4 px-6">Electric</td>
                                <td className="py-4 px-6">$150 / day</td>
                                <td className="py-4 px-6">New York</td>
                                <td className="py-4 px-6">
                                    <span className="px-3 py-1 bg-green-600 rounded-full text-sm font-medium">Active</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default MyBookings;