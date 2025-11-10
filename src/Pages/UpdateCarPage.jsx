import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCarPage = () => {
    const car = useLoaderData()
    // console.log(car)
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 flex justify-center items-center py-10 px-6">
            <div className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-teal-400">
                    Update Car Details
                </h2>

                <form className="space-y-6">
                    {/* Car Name */}
                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">
                            Car Name
                        </label>
                        <input
                            type="text"
                            name="car_name"
                            defaultValue={car.car_name}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">
                            Description
                        </label>
                        <textarea
                            name='description'

                            defaultValue={car.description
                            }
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 h-28 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">
                            Category
                        </label>
                        <input
                            type="text"
                            name='category'
                            defaultValue={car.category}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Rent Price */}
                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">
                            Rent Price ($/day)
                        </label>
                        <input
                            type="number"
                            name='rent_price'
                            defaultValue={car.rent_price}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={car.location}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Provider Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 text-gray-400 font-medium">
                                Provider Name
                            </label>
                            <input
                                type="text"
                                name="provider_name"
                                defaultValue={car.provider_name}
                                readOnly
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-400 font-medium">
                                Provider Email
                            </label>
                            <input
                                type="email"
                                name="provider_email"
                                defaultValue={car.provider_email}
                                readOnly
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-400 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block mb-2 text-gray-400 font-medium">
                            Image URL
                        </label>
                        <input
                            type="url"
                            name="image_url"
                            defaultValue={car.image_url}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Image Preview */}
                    <div className="mt-6 text-center">
                        <img
                            src="https://i.ibb.co.com/mFNyyqpx/Tesla-Model-S.jpg"
                            alt="Car preview"
                            className="w-60 h-40 object-cover rounded-xl border border-gray-700 shadow-md mx-auto"
                        />
                        <p className="text-sm text-gray-500 mt-2">Current Image</p>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-8">
                        <button
                            type="button"
                            className="bg-teal-600 hover:bg-teal-500 transition duration-300 px-10 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-teal-500/30"
                        >
                            Update Car
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCarPage;