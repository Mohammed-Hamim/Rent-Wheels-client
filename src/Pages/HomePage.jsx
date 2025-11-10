// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import RentUs from '../Components/RentUs';
import Slider from '../Components/Slider';
import { useLoaderData } from 'react-router';
import TopRatedCarCard from '../Components/TopRatedCarCard';
import Testimonials from '../Components/Testimonials';


const HomePage = () => {
    const carData = useLoaderData()
    const [topCar, setTopCar] = useState([])
    console.log(carData)

    useEffect(() => {
        fetch('http://localhost:3000/top_rated_cars')
            .then(res => res.json())
            .then(data => {
                console.log("top", data)
                setTopCar(data)
            })
    }, [])

    return (


        <div className='min-h-screen relative bg-gray-900 text-gray-100'>
            <section className='my-10 relative h-full w-full top-[-116px] z-0'>
                <Slider></Slider>
            </section>

            {/* Search Bar */}
            <section className='mt-[-80px] px-4'>
                <div className='container mx-auto'>
                    <div className='flex flex-col md:flex-row items-center gap-4 bg-gray-800 rounded-2xl p-4 shadow-lg'>
                        <input
                            type="text"
                            placeholder="Search for cars by name..."
                            className="flex-1 bg-gray-700 text-gray-100 placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                        />
                        <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* newest car  */}
            <section className='mt-8 bg-gray-800 py-16'>
                <h2 className='text-center text-white font-bold mb-10 text-xl md:text-4xl'>
                    Drive the Latest, Rent the Best
                </h2>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                    {carData.map(car => <Card key={car._id} car={car}></Card>)}
                </div>
            </section>

            {/* why rent us */}
            <section className='mt-[-40px] bg-gray-900'>
                <RentUs></RentUs>
            </section>

            {/* top rated cars */}
            <section className='bg-gray-800 py-16 mt-[-40px]'>
                <div className='mb-10'>
                    <h2 className="text-4xl font-bold text-white mb-3 text-center">
                        Highly Rated Rides
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-center">
                        Discover the cars our customers love the most — rated for comfort, style, and performance. Find your perfect ride from our top-rated collection.
                    </p>
                </div>

                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                    {topCar.map(car => <TopRatedCarCard key={car._id} car={car}></TopRatedCarCard>)}
                </div>
            </section>

            {/* testimonials */}
            <section className='bg-gray-900'>
                <Testimonials></Testimonials>
            </section>
        </div>









        // <div className='min-h-screen relative'>
        //     <section className='my-10 relative h-full w-full top-[-105px] z-0'>
        //         <Slider></Slider>
        //     </section>
        //     {/* newest car  */}
        //     <section className=' mt-[-100px] bg-[#b2bec3] py-16'>
        //         <h2 className='text-center text-black font-bold mb-10 text-xl md:text-4xl'>Drive the Latest, Rent the Best</h2>
        //         <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        //             {
        //                 carData.map(car => <Card car={car}></Card>)
        //             }
        //         </div>

        //     </section>

        //     {/* why rent us */}
        //     <section className='mt-[-40px]'>
        //         <RentUs></RentUs>
        //     </section>

        //     {/* top rated cars */}
        //     <section className='bg-[#dcdde1] py-16 mt-[-40px]'>
        //         <div className='mb-10'>

        //             <h2 className="text-4xl font-bold text-black mb-3 text-center">
        //                 Highly Rated Rides
        //             </h2>
        //             <p className="text-gray-700 max-w-2xl mx-auto text-center">
        //                 Discover the cars our customers love the most — rated for comfort, style, and performance. Find your perfect ride from our top-rated collection.
        //             </p>
        //         </div>

        //         <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
        //             {
        //                 topCar.map(car => <TopRatedCarCard key={car._id} car={car}></TopRatedCarCard>)
        //             }
        //         </div>
        //     </section>

        //     {/* testimonials */}
        //     <section>
        //         <Testimonial></Testimonial>
        //     </section>



        // </div>
    );
};

export default HomePage;