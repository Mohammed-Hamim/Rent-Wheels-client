import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import Loading from '../Components/Loading';

const MyListingPage = () => {
    const { user } = use(AuthContext)
    const [loading, setLoading] = useState(true)
    const [myListing, setMyListing] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`https://rent-wheels-api-server-green.vercel.app/all_cars?email=${user?.email} `)
                .then(res => res.json())
                .then(data => {
                    setMyListing(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }
    }, [user, setLoading])

    if (loading) {
        return <Loading></Loading>
    }

    // delete car 
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete car data
                fetch(`https://rent-wheels-api-server-green.vercel.app/all_cars/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                      
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your car has been deleted.",
                                icon: "success"
                            });
                            const remainingList = myListing.filter(list => list._id !== id)
                            setMyListing(remainingList)
                        }
                    })
                    .catch(err => {
                        toast.error(err.message)
                    })
            }
        });
    }

    return (
        <div className="md:min-h-screen   py-12">
            <title>My-Listing</title>
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                {/* Header */}
                <h2 className="text-3xl font-bold text-center mb-10 text-secondary">
                    My Car Listings
                </h2>

                {/* Table Container */}
                <div className="bg-gray-800 rounded-2xl shadow-lg overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="py-4 px-6 font-semibold text-gray-200">SL No.</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Car Name</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Category</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Rent Price</th>
                                <th className="py-4 px-6 font-semibold text-gray-200">Status</th>
                                <th className="py-4 px-6 font-semibold text-gray-200 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {/* Row */}
                            {
                                myListing.map((list, index) =>
                                    <tr key={list._id} className="border-b text-gray-400 border-gray-700 hover:bg-gray-700/40 transition duration-200">
                                        <td className="py-4 px-6">{index + 1}</td>
                                        <td className="py-4 px-6">{list.car_name}</td>
                                        <td className="py-4 px-6">{list.category}</td>
                                        <td className="py-4 px-6">${list.rent_price} / day</td>
                                        <td className="py-4 px-6">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${list.status && "bg-red-400 text-white"} bg-green-300 text-gray-900`}>
                                                {list.status ? `${list.status}` : "Available"}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex justify-center gap-3">
                                                <Link to={`/updateCar/${list._id}`} className="px-4 py-2 rounded-lg btn-outline border-2 border-teal-700  hover:bg-teal-300 transition font-semibold text-white">
                                                    Update
                                                </Link>
                                                <button onClick={() => handleDelete(list._id)} className="px-4 py-2 rounded-lg btn-outline border-2 border-red-500  hover:bg-red-500 transition font-semibold text-white">
                                                    Delete
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

export default MyListingPage;