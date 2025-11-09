// import React, { useState } from 'react';
import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import RentUs from '../Components/RentUs';
import Slider from '../Components/Slider';
import { useLoaderData } from 'react-router';
import TopRatedCarCard from '../Components/TopRatedCarCard';

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
        <div className='min-h-screen relative'>
            <section className='my-10 relative h-full w-full top-[-105px] z-0'>
                <Slider></Slider>
            </section>
            {/* newest car  */}
            <section className=' mt-[-100px] bg-[#b2bec3] py-16'>
                <h2 className='text-center text-black font-bold mb-10 text-xl md:text-4xl'>Drive the Latest, Rent the Best</h2>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                    {
                        carData.map(car => <Card car={car}></Card>)
                    }
                </div>

            </section>

            {/* why rent us */}
            <section>
                <RentUs></RentUs>
            </section>

            {/* top rated cars */}
            <section className='bg-[#dcdde1] py-16'>
                <div className='mb-10'>

                    <h2 className="text-4xl font-bold text-black mb-3 text-center">
                        Highly Rated Rides
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto text-center">
                        Discover the cars our customers love the most — rated for comfort, style, and performance. Find your perfect ride from our top-rated collection.
                    </p>
                </div>

                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                    {
                        topCar.map(car => <TopRatedCarCard key={car._id} car={car}></TopRatedCarCard>)
                    }
                </div>
            </section>



        </div>
    );
};

export default HomePage;