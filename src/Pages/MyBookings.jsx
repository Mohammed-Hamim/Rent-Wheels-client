import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading';


const MyBookings = () => {
    const { user } = use(AuthContext)
    const [loading, setLoading] = useState(true)
    const [myBookings, setMyBookings] = useState([])

    // handle delete booking
    const handleDeleteBooking = (bookingId, car_id) => {
        // delete booking
        fetch(`https://rent-wheels-api-server-green.vercel.app/bookings/${bookingId}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {

                    // update car status after  delete booking
                    fetch(`https://rent-wheels-api-server-green.vercel.app/all_cars/${car_id}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify({ status: "" })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount) {
                                Swal.fire({
                                    
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

            })
    }



    useEffect(() => {
        if (user?.email) {
            fetch(`https://rent-wheels-api-server-green.vercel.app/bookings?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {

                    setMyBookings(data)
                    setLoading(false)
                })
                .catch(err => {
                    toast.error(err.message)
                })
        }
    }, [user, setLoading,])


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="md:min-h-screen  py-12">
            <title>My-Bookings</title>
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <h2 className="text-3xl font-bold text-center mb-10 text-secondary">My Bookings</h2>

                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="py-4 px-6 font-semibold text-gray-200">SL No.</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Car Name</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Category</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Rent Price</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Location</th>
                                <th className="py-4  text-center font-semibold   text-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myBookings.map((booking, index) =>
                                    <tr key={booking._id} className="border-b border-gray-700 hover:bg-gray-700/40 transition">
                                        <td className="py-4 px-6"> {index + 1} </td>
                                        <td className="py-4 px-6"> {booking.car_name} </td>
                                        <td className="py-4 px-6">{booking.category}</td>
                                        <td className="py-4 px-6">${booking.rent_price}/ day</td>
                                        <td className="py-4 px-6">{booking.location}</td>
                                        <td className="py-4 flex px-6 justify-center items-center ">
                                            <div className='flex gap-2 flex-col md:flex-row'>
                                                <button onClick={() => handleDeleteBooking(booking._id, booking.car_id)} className=" btn-outline border-2 border-red-500  btn text-white text-sm hover:bg-red-500 font-medium">Cancel</button>
                                                <button className='btn btn-outline border-2 border-green-700 hover:bg-green-900'>
                                                    <Link to={`/carDetails/${booking.car_id}`}>Details</Link>
                                                </button>
                                            </div>
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