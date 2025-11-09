import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';

const BrowseCarPage = () => {

const carData = useLoaderData()

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            {/* Banner Section */}
            <section className="bg-gray-800 py-12">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-3">Browse Our Cars</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Find the perfect car for your next journey. Premium vehicles, reliable service, and easy booking.
                    </p>
                </div>
            </section>

            {/* Cars Grid Section */}
            <section className="container mx-auto px-6 py-12">
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