import React from 'react';

const RentUs = () => {
    return (


        <div className="bg-gray-900 my-10 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-white mb-10">
                    Why Rent With Us
                </h2>

                {/* Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <div className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6">
                        <div className="text-teal-400 text-4xl mb-4">
                            🚗
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Easy Booking</h3>
                        <p className="text-gray-300">
                            Book your car in just a few clicks with our simple and fast online system.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6">
                        <div className="text-green-400 text-4xl mb-4">
                            💸
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Affordable Rates</h3>
                        <p className="text-gray-300">
                            Enjoy competitive prices with no hidden charges — drive more, spend less.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6">
                        <div className="text-yellow-400 text-4xl mb-4">
                            🤝
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Trusted Providers</h3>
                        <p className="text-gray-300">
                            Rent from verified and reliable car owners for a worry-free experience.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition p-6">
                        <div className="text-red-400 text-4xl mb-4">
                            ⏰
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                        <p className="text-gray-300">
                            Our customer service is available anytime to help you on the road.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentUs;