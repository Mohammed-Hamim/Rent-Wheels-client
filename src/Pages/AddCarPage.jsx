import React from 'react';

const AddCarPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="bg-gray-800 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center text-white mb-8">
                        Add a New Car
                    </h2>

                    {/* Add Car Form */}
                    <form className="space-y-6">

                        {/* Car Name */}
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Car Name</label>
                            <input
                                type="text"
                                name="car_name"
                                placeholder="Enter car name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-green-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Description</label>
                            <textarea
                                name="description"
                                rows="4"
                                placeholder="Write a short description..."
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-green-500 focus:outline-none"
                                required
                            ></textarea>
                        </div>

                        {/* Category Dropdown */}
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Category</label>
                            <select
                                name="category"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-green-500 focus:outline-none"
                                required
                            >
                                <option value="">Select a Category</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Luxury">Luxury</option>
                                <option value="Electric">Electric</option>
                            </select>
                        </div>

                        {/* Rent Price */}
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">
                                Rent Price (per day)
                            </label>
                            <input
                                type="number"
                                name="rent_price"
                                placeholder="Enter price per day"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-green-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Location</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter car location"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-green-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-gray-300 mb-2 font-medium">Hosted Image URL</label>
                            <input
                                type="text"
                                name="image_url"
                                placeholder="Enter image URL (from Unsplash or Google)"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:border-green-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Provider Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Provider Name</label>
                                <input
                                    type="text"
                                    name="provider_name"
                                    // value={user?.displayName || "John Doe"}
                                    readOnly
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-400 border border-gray-600 cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Provider Email</label>
                                <input
                                    type="email"
                                    name="provider_email"
                                    // value={user?.email || "example@email.com"}
                                    readOnly
                                    className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-400 border border-gray-600 cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-lg transition duration-300"
                            >
                                Add Car
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddCarPage;