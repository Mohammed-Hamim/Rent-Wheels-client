
import { useEffect, useState } from 'react';
import Card from '../Components/Card';
import RentUs from '../Components/RentUs';
import Slider from '../Components/Slider';
import { Link, useLoaderData } from 'react-router';
import TopRatedCarCard from '../Components/TopRatedCarCard';
import Testimonials from '../Components/Testimonials';
import Loading from '../Components/Loading';
import { CiSearch } from 'react-icons/ci';
import SearchSpin from '../Components/SearchSpin';


const HomePage = () => {

    const [loading, setLoading] = useState(true)
    const cars = useLoaderData()
    const [latestCars, setLatestCars] = useState()

    const [topRatedCar, setTopRatedCar] = useState([])
    const [searching, setSearching] = useState(false)
    const [searched, setSearched] = useState('')// state for filtering


    // filter latest cars 
    useEffect(() => {
        const latestCar = [...cars]
            .sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
            .slice(0, 6);
        setLatestCars(latestCar);
        setLoading(false)
    }, [cars]);





    // get input value
    const handleSearch = (e) => {
        e.preventDefault()
        const userSearch = e.target.search.value;
        console.log(userSearch)
        setSearched(userSearch)

        // Show search animation
        setSearching(true);

        // delay
        setTimeout(() => {
            setSearching(false);
        }, 300);
    }

    const searchValue = searched.trim().toLowerCase();

    //  Filter cars if user searches, else show latest
    const carData = searchValue
        ? cars.filter((car) =>
            car.car_name.trim().toLowerCase().includes(searchValue)
        )
        : latestCars;

    // top rated cars 
    useEffect(() => {
        fetch('https://rent-wheels-api-server-green.vercel.app/top_rated_cars')
            .then(res => res.json())
            .then(data => {

                setTopRatedCar(data)
                setLoading(false)
            })
    }, [])




    if (loading) {
        return <Loading></Loading>
    }
    return (


        <div className='min-h-screen mx-auto relative text-gray-100'>
<title>Home</title>
            {/* slider */}
            <section className='relative my-10 bg-gray-900/90  shadow-2xl  w-full  rounded-xl'>
                <Slider></Slider>

            </section>

            {/* newest car  */}
            <section className='mt-8  rounded-2xl  bg-gray-800 py-16'>
                <div className="text-center px-4 mb-6 space-y-4">
                    <h1 className="text-4xl text-secondary font-bold">Drive the Latest, Rent the Best</h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Find your perfect ride for any journey. Choose from a wide range of luxury, economy, and electric cars.
                    </p>
                    <div className="flex justify-center">


                        <form onSubmit={handleSearch} className='relative'>
                            <input
                                type="text"

                                name='search'

                                placeholder="Search cars by name..."

                                className=" md:w-96 px-4 py-2 rounded-xl bg-gray-800 border border-gray-600 focus:outline-none    text-gray-200"
                            />
                            <button className=' text-center absolute right-2 my-2 text-teal-300'>
                                <CiSearch size={30} />
                            </button>
                        </form>
                    </div>
                </div>



                {
                    searching ? <SearchSpin></SearchSpin>
                        : <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                            {carData.map(car => <Card key={car._id} car={car}></Card>)}
                        </div>
                }
                <div className='flex justify-center items-center mt-10'>
                    <Link to='/browse_cars' className='btn text-gray-100 btn-outline border-2 border-teal-500'>Explore All </Link>
                </div>
            </section>

            {/* why rent us */}
            <section className=' bg-gray-900  rounded-2xl   my-10 '>
                <RentUs></RentUs>
            </section>

            {/* top rated cars */}
            <section className='bg-gray-800 py-16   rounded-2xl'>
                <div className='mb-10'>
                    <h2 className="text-4xl font-bold text-secondary mb-3 text-center">
                        Highly Rated Rides
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-center">
                        Discover the cars our customers love the most — rated for comfort, style, and performance. Find your perfect ride from our top-rated collection.
                    </p>
                </div>

                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                    {topRatedCar.map(car => <TopRatedCarCard key={car._id} car={car}></TopRatedCarCard>)}
                </div>
            </section>

            {/* testimonials */}
            <section className='bg-gray-900  mt-10'>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default HomePage;