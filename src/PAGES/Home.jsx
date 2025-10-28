import React from 'react';
import Swiperhero from '../Swiperhero';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import PlantCareTips from './TipsCate';
import GreenExperts from './GreenExperts';





// import Card from './PAGES/Card';


const Home = () => {

    const data = useLoaderData();
    return (
        <div className='max-w-[1140px] mx-auto p-4'>
            <Swiperhero></Swiperhero>

            <h1 className='font-bold text-5xl text-center mt-20 mb-8 max-[600px]:mt-8 max-[600px]:text-[30px]'>Top Rated Indoor Plants</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4" >
                {
                    data.slice(0, 3).map(tree => <Card key={tree.plantId} tree={tree}></Card>)
                }
            </div>

            <div>
                <h2 className='font-bold text-5xl text-center mt-20 mb-8 max-[600px]:mt-8 max-[600px]:text-[30px]'>Plant Care Tips:</h2>
                <PlantCareTips></PlantCareTips>
            </div>

            <div>
                <GreenExperts></GreenExperts>
            </div>
        </div>
    );
};

export default Home;