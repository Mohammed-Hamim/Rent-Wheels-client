import React from 'react';
import { Link } from 'react-router';
import Reveal from '../animation/Reveal';


const Card = ({ car }) => {

    return (

        <Reveal>
            <div className=''>


                <div className="bg-gray-700 leading-relaxed rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-600">
                    {/* Car Image */}
                    <div className="relative">
                        <img
                            src={car.image_url}
                            alt={car.car_name}
                            className="w-full h-52 object-cover"
                        />
                        <div className={` leading-relaxed  absolute top-2 right-2`}>
                            {
                                car?.status ? <span className='bg-red-400 badge text-gray-900 font-bold'>{car.status}</span> : <span className='badge bg-green-400 text-gray-900 font-bold'>Available</span>
                            }
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <h2 className="text-xl leading-relaxed font-semibold text-white mb-1">
                            {car.car_name}
                        </h2>

                        <p className="text-gray-300 mb-1">
                            <span className="font-medium leading-relaxed text-white">Rent Price:</span> ${car.rent_price} / day
                        </p>

                        <p className="text-gray-300 mb-1">
                            <span className="font-medium leading-relaxed text-white">Model:</span> {car.category}
                        </p>

                        <p className="text-gray-300 mb-3">
                            <span className="font-medium leading-relaxed text-white">Provider:</span> {car.provider_name}
                        </p>

                        <Link to={`/carDetails/${car._id}`}
                            className="w-full  leading-relaxed btn custom-btn">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </Reveal>


    );
};

export default Card;