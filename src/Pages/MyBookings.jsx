import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';


const MyBookings = () => {
    const { user } = use(AuthContext)
    const [myBookings, setMyBookings] = useState([])
    console.log(myBookings)

    // handle delete booking
    const handleDeleteBooking = (bookingId, car_id) => {
        console.log("delete", { bookingId, car_id })

        // delete booking
        fetch(`http://localhost:3000/bookings/${bookingId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.deletedCount)
                if (data.deletedCount) {

                    // update car status after  delete booking
                    fetch(`http://localhost:3000/all_cars/${car_id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({ status: "" })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.modifiedCount) {

                                Swal.fire({
                                    position: "top-middle",
                                    icon: "success",
                                    title: "Booking is deleted successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                const remaining = myBookings.filter(booking => booking._id !== bookingId)
                                setMyBookings(remaining)
                            }
                        })
                        .catch(err => {
                            toast.error(err.message)
                        })
                }
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
            })




    }

    // http://localhost:3000/bookings?email=abul@babul.com

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/bookings?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setMyBookings(data)
                })
                .catch(err => {
                    console.log(err.message)
                })
        }

    }, [user])

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
                                <th className="py-4 px-6 font-semibold text-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myBookings.map(booking =>

                                    <tr key={booking._id} className="border-b border-gray-700 hover:bg-gray-700/40 transition">
                                        <td className="py-4 px-6"><Link to={`/carDetails/${booking.car_id}`}>{booking.car_name}</Link></td>
                                        <td className="py-4 px-6">{booking.category}</td>
                                        <td className="py-4 px-6">${booking.rent_price}/ day</td>
                                        <td className="py-4 px-6">{booking.location}</td>
                                        <td className="py-4 px-6">
                                            <button onClick={() => handleDeleteBooking(booking._id, booking.car_id)} className="px-3 py-1 bg-red-400 rounded-full text-black text-sm hover:bg-red-500 font-medium">Cancel</button>
                                        </td>
                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default MyBookings;