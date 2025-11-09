import React from 'react';

const RentUs = () => {
    return (

        <div class="bg-[#636e72] my-10 py-16">
            <div class="container mx-auto px-4 text-center">
                {/*   Section Heading   */}
                <h2 class="text-3xl font-bold text-black mb-10">
                    Why Rent With Us
                </h2>

                {/*   Cards Grid   */}
                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/*   Card 1  */}
                    <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6">
                        <div class="text-blue-600 text-4xl mb-4">
                            🚗
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Easy Booking</h3>
                        <p class="text-gray-600">
                            Book your car in just a few clicks with our simple and fast online system.
                        </p>
                    </div>

                    {/*   Card 2   */}
                    <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6">
                        <div class="text-green-600 text-4xl mb-4">
                            💸
                        </div>
                        <h3 class="text-xl font-semibold text-[#2d3436] mb-2">Affordable Rates</h3>
                        <p class="text-gray-600">
                            Enjoy competitive prices with no hidden charges — drive more, spend less.
                        </p>
                    </div>

                    {/*   Card 3   */}
                    <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6">
                        <div class="text-yellow-500 text-4xl mb-4">
                            🤝
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Trusted Providers</h3>
                        <p class="text-gray-600">
                            Rent from verified and reliable car owners for a worry-free experience.
                        </p>
                    </div>

                    {/*   Card 4  */}
                    <div class="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6">
                        <div class="text-red-500 text-4xl mb-4">
                            ⏰
                        </div>
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                        <p class="text-gray-600">
                            Our customer service is available anytime to help you on the road.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default RentUs;