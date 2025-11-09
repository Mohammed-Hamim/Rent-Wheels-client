import React from 'react';

const Testimonial = () => {
    return (
         
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-6">
                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-3">What Our Customers Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hear from our happy clients who enjoyed their rides. Our customers’ satisfaction drives us to deliver the best car rental experience.
                        </p>
                    </div>

                    {/* Testimonial Cards Grid */}
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

                        {/* Testimonial 1 */}
                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://i.ibb.co.com/9HdqVyGP/images-q-tbn-ANd9-Gc-TZq-P-dj5-RJPVelv-Q8k-Bp-Nj0hr710-XH8py6u-Q-s.jpg"
                                    alt="John Doe"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-gray-800 font-semibold">John Doe</h3>
                                    <p className="text-gray-500 text-sm">Verified Rider</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "RentWheels made renting a car so easy! The booking process was smooth, and the car was in perfect condition. Highly recommend!"
                            </p>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://i.ibb.co.com/LdWZS3Mk/emma-smith-cbc-reporter.jpg"
                                    alt="Emma Smith"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-gray-800 font-semibold">Emma Smith</h3>
                                    <p className="text-gray-500 text-sm">Verified Rider</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "The customer service is amazing and available 24/7. I felt completely supported throughout my rental. The car was excellent!"
                            </p>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://i.ibb.co.com/gbRP4jRQ/images-q-tbn-ANd9-Gc-QBbfyz5c-U0ag-Gn-Vb-IZDW6t-JDNROKN1d-GTMg-s.jpg"
                                    alt="Michael Lee"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="text-gray-800 font-semibold">Michael Lee</h3>
                                    <p className="text-gray-500 text-sm">Verified Rider</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                "I loved the variety of cars available and the top-rated vehicles were truly impressive. Renting was quick, easy, and enjoyable!"
                            </p>
                        </div>

                    </div>
                </div>
            </div>

       
    );
};

export default Testimonial;