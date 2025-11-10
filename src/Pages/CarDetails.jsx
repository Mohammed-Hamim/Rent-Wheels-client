import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CarDetails = () => {
    const { user } = use(AuthContext)
    const car = useLoaderData()
    // console.log(car)
    const [carStatus, setCarStatus] = useState(car?.status)
    // cons

    // http://localhost:3000/bookings
    // booking 
    const handleBooking = () => {
        const bookingInfo = {
            car_id: car._id,
            user_name: user.displayName,
            user_email: user.email,
            user_image: user.photoURL,
            car_name: car.car_name,
            category: car.category,
            rent_price: car.rent_price,
            location: car.location,
            image_url: car.image_url,
            booking_date: new Date()

        }
        fetch('http://localhost:3000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    const status = "Booked";
                    car.status = status //set status instantly in the ui

                    // update booking status to the DB
                    fetch(`http://localhost:3000/all_cars/${car._id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({ status })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.modifiedCount) {
                                Swal.fire({
                                    position: "top-middle",
                                    icon: "success",
                                    title: "Car is booked successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
    }


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
                            <button onClick={handleBooking}
                                disabled={car.status === 'Booked' || car.status === true}
                                className="w-full bg-primary   hover:bg-green-500 text-white font-bold py-3 rounded-xl transition duration-300">
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