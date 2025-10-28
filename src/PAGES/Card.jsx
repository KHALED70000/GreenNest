import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({tree}) => {


    return (
       <div className='p-4 bg-black rounded-2xl'>
        <div className='w-full'>
            <img className='w-full aspect-square object-cover rounded-[5px]' src={tree.image} alt="" />
        </div>

         <div className='my-2 flex justify-between items-center'>
            <p className='text-[20px] font-semibold text-pink-500'><span className='text-green-400'>Name:</span> {tree.plantName}</p>
            <p className='text-orange-400'>Rate: {tree.rating}</p>
         </div>

         <div className='flex justify-between items-center mb-4'>
            <p className='font-semibold text-[20px] text-blue-400'>Care Level: <span className='bg-gray-700 py-1 px-2 rounded-full text-[15px]'>{tree.careLevel}</span></p>
            <p className='text-[20px] text-pink-500 font-semibold'>Price: <span className='font-bold text-green-400 text-3xl'>${tree.price}</span></p>
         </div>
         <NavLink to={`/viewdetail/${tree.plantId}`}>
            <div className='bg-amber-400 py-2 text-black font-bold text-center rounded-[5px]' title='Click Here'>
                View Details
            </div>
         </NavLink>
       </div>
    );
};

export default Card;