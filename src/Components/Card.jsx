import React from 'react';

const Card = ({ car }) => {

    return (
        <div>
            <div class=" bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                {/*  Car Image  */}
                <div className='relative'>
                    <img
                        src={car.image_url}

                        alt="BMW 3 Series"
                        class="w-full h-52 object-cover"
                    />
                    <div className="badge bg-[#81ecec] badge-success absolute top-2 right-2 font-bold">Available</div>

                </div>

                {/* Content  */}
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-800 mb-1">
                        {car.car_name}
                    </h2>

                    <p class="text-gray-600 mb-1">
                        <span class="font-medium text-gray-800">Rent Price:</span> ${car.rent_price} / day
                    </p>

                    <p class="text-[#2f3640] mb-1">
                        <span class="font-medium text-gray-800">Model:</span>  {car.category}
                    </p>

                    <p class="text-gray-600 mb-3">
                        <span class="font-medium text-gray-800">Provider:</span> {car.provider_name}
                    </p>

                    <button
                        class="w-full bg-primary hover:bg-[#00b894] text-white py-2 rounded-lg font-medium transition">
                        View Details
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Card;