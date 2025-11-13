import React from 'react';
import Reveal from '../animation/Reveal';

const TopRatedCarCard = ({ car }) => {
    return (
        <Reveal>
            <div>
                <div className="bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-600">
                    {/* Car Image */}
                    <div className="relative">
                        <img
                            src={car.image_url}
                            alt={car.car_name}
                            className="w-full h-52 object-cover"
                        />
                        <span className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-sm px-2 py-1 rounded-lg font-semibold shadow-md">
                            ★ {car.rating}
                        </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{car.car_name}</h3>
                        <p className="text-gray-300 text-sm mb-2">
                            <span className="font-medium text-white">Type:</span> {car.category}
                        </p>
                        <p className="text-gray-400 leading-relaxed text-base mb-3">
                            {car.description}
                        </p>
                        <p className="text-teal-400 font-bold text-lg mb-3">${car.rent_price} / day</p>
                        <p className="text-gray-300 text-sm mb-4">
                            Provided by <span className="font-medium text-white">{car.provider_name}</span>
                        </p>
                    </div>
                </div>
            </div>
        </Reveal>
    );
};

export default TopRatedCarCard;