import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const Plants = () => {
    const data = useLoaderData();
    return (
        <div className='max-w-[1140px] mx-auto p-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4" >
                {
                    data.map(tree => <Card key={tree.plantId} tree={tree}></Card>)
                }
            </div>
        </div>
    );
};

export default Plants;