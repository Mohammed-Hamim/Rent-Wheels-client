// import React, { useState } from 'react';
import Card from '../Components/Card';
import RentUs from '../Components/RentUs';
import Slider from '../Components/Slider';
import { useLoaderData } from 'react-router';

const HomePage = () => {
    const carData = useLoaderData()
    console.log(carData)



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





        </div>
    );
};

export default HomePage;