import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const CarDetails = () => {
    const { user } = use(AuthContext)
    const car = useLoaderData()

    const [carStatus, setCarStatus] = useState(car?.status && car.status !== '' && car.status !== undefined
        ? car.status
        : 'Available')




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
        fetch('https://rent-wheels-api-server-green.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    const status = "Booked";
                    setCarStatus(status)

                    // update booking status to the DB
                    fetch(`https://rent-wheels-api-server-green.vercel.app/all_cars/${car._id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({ status })
                    })
                        .then(res => res.json())
                        .then(data => {

                            if (data.modifiedCount) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Car is booked successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                        .catch(err => {
                            toast.error(err.message)
                        })
                }
            })
            .catch(err => {
                toast.error(err.message)
            })
    }


    return (
        <div className="min-h-screen  text-gray-100 py-12">
             <title>Car-Details</title>
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
                            <p className="text-gray-400 leading-relaxed mb-4">{car.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <p><span className="font-semibold text-white">Category:</span> {car.category}</p>
                                <p><span className="font-semibold text-white">Rent Price:</span> ${car.rent_price} / day</p>
                                <p><span className="font-semibold text-white">Location:</span> {car.location}</p>
                                <p>
                                    Status: <span className={`${carStatus === "Booked" ? "bg-red-400" : "bg-green-600"} badge`} >
                                        {carStatus}
                                    </span>
                                </p>
                            </div>

                            {/* Provider Info */}
                            <div className="mt-6 bg-gray-700 p-4 rounded-xl">
                                <h3 className="text-xl font-semibold text-white mb-2">Provider Information</h3>
                                <p><span className="font-medium text-white"></span> {car.provider_name}</p>
                                <p><span className="font-medium text-white">Email:</span> {car.provider_email}</p>
                            </div>
                        </div>

                        {/* Book Now Button */}
                        <div className="mt-6">
                            <button onClick={handleBooking}
                                disabled={carStatus === 'Booked'}
                                className="w-full custom-btn ">
                                {carStatus === 'Booked' ? "Booked" : "Book Now"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;