import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import Card from '../Components/Card';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';




const BrowseCarPage = () => {
    const [carData, setCarData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://rent-wheels-api-server-green.vercel.app/all_cars')
            .then(res => res.json())
            .then(data => {
                setCarData(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [setLoading])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="min-h-screen  text-gray-100">
            <title>Browse-cars</title>
            {/* Banner Section */}
            <section className=" py-12">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl text-secondary font-bold mb-3">Browse Our Cars</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Find the perfect car for your next journey. Premium vehicles, reliable service, and easy booking.
                    </p>
                </div>
            </section>

            {/* Cars Grid Section */}
            <section className="container mx-auto px-6 pb-10">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {
                        carData.map(car => <Card key={car._id} car={car}></Card>)
                    }
                </div>
            </section>
        </div>
    );
};

export default BrowseCarPage;