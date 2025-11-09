import React from 'react';

const TopRatedCarCard = ({car}) => {
    return (
        <div>
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden  ">
                {/* Car Image */}
                <div className="relative">
                    <img
                        src= {car.image_url}
                        alt= {car.car_name}
                        className="w-full h-52 object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-yellow-400 text-white text-sm px-2 py-1 rounded-lg font-semibold shadow-md">
                        ★ {car.rating}
                    </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{car.car_name}</h3>
                    <p className="text-gray-500 text-sm mb-2">
                        <span className="font-medium">Type:</span> {car.category}
                    </p>
                    <p className="text-gray-700 text-base mb-3">
                         {car.description}
                    </p>
                    <p className="text-primary font-bold text-lg mb-3">${car.rent_price} / day</p>
                    <p className="text-gray-500 text-sm mb-4">
                        Provided by <span className="font-medium">Oliver Scott {car.provider_name}</span>
                    </p>
                    {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
                        View Details
                    </button> */}
                </div>
            </div>

        </div>
    );
};

export default TopRatedCarCard;