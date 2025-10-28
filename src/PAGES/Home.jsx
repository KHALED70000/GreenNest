import React from 'react';
import Swiperhero from '../Swiperhero';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';



// import Card from './PAGES/Card';


const Home = () => {

    const data = useLoaderData();
    return (
        <div className='max-w-[1140px] mx-auto'>
            <Swiperhero></Swiperhero>

            <h1 className='font-bold text-5xl text-center mt-20 mb-8 max-[600px]:mt-8'>Top Rated Indoor Plants</h1>

            <div className='grid grid-cols-3 gap-4'>
               {
                data.slice(0, 3).map(tree => <Card key = {tree.plantId} tree={tree}></Card>)
               }
            </div>

            <div>
               
            </div>
        </div>
    );
};

export default Home;