import React from 'react';
import { useLoaderData } from 'react-router';

const CarDetails = () => {
    const car = useLoaderData()
    console.log(car)
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">

                {/* Car Details Container */}
                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row gap-8 p-6">

                    {/* Car Image */}
                    <div className="flex-shrink-0 w-full lg:w-1/2">
                        <img
                            src={car.image_url}
                            alt={car.car_name}
                            className="w-full h-80 lg:h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Car Info */}
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">{car.car_name}</h2>
                            <p className="text-gray-300 mb-4">{car.description}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <p><span className="font-semibold text-white">Category:</span> {car.category}</p>
                                <p><span className="font-semibold text-white">Rent Price:</span> ${car.rent_price} / day</p>
                                <p><span className="font-semibold text-white">Location:</span> {car.location}</p>
                                <p>
                                    <span className="font-semibold  ">Status:
                                        <span className='m-2'>
                                            {!car.status ? <span className='badge bg-green-400 text-gray-900'>Available</span> : <span className='bg-red-400 text-gray-900 badge'>{car.status}</span>}</span>
                                    </span>


                                </p>
                            </div>

                            {/* Provider Info */}
                            <div className="mt-6 bg-gray-700 p-4 rounded-xl">
                                <h3 className="text-xl font-semibold text-white mb-2">Provider Information</h3>
                                <p><span className="font-medium text-white">Name:</span> {car.provider_name}</p>
                                <p><span className="font-medium text-white">Email:</span> {car.provider_email}</p>
                            </div>
                        </div>

                        {/* Book Now Button */}
                        <div className="mt-6">
                            <button className="w-full bg-primary hover:bg-green-500 text-white font-bold py-3 rounded-xl transition duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CarDetails;