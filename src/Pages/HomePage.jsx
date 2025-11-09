// import React, { useState } from 'react';
import Card from '../Components/Card';
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

            <section className='container mt-[-100px] mx-auto rounded-2xl bg-[#b2bec3] p-4'>
                <h2 className='text-center font-bold mb-10 text-xl md:text-4xl'>Drive the Latest, Rent the Best</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   '>
                    {
                        carData.map(car => <Card car={car}></Card>)
                    }
                </div>

            </section>





        </div>
    );
};

export default HomePage;