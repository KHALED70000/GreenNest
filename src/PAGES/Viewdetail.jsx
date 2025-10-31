import React, { use } from 'react';
import { useLoaderData } from 'react-router-dom';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from '../Loader/Loading';
import { AuthContext } from '../Provider/AuthProvider';


const Viewdetail = () => {
    const data = useLoaderData();
    const { loading } = use(AuthContext)

    if(loading){
        return <Loading></Loading>;
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const NAME = form.name.value;
        const EMAIL = form.email.value;

        console.log(NAME, EMAIL);

        toast.success(`Thanks ${NAME}! Your booking has been received.`, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
        });

        form.reset();
    }
    return (
        <div className='px-4 mx-auto max-w-[1140px]'>

            <div className='my-12 grid grid-cols-2 gap-6 max-[600px]:grid-cols-1'>
                <div>
                    <img className='aspect-square object-cover rounded-[5px]' src={data.image} alt="" />
                </div>

                <div className='flex flex-col justify-around'>
                    <p className='text-green-400 text-3xl font-semibold'>Plant Name: <span className='text-pink-500 italic'>{data.plantName}.</span></p>
                    <hr />
                    <p className='text-green-400 text-3xl font-semibold'>Catagory: <span className='text-pink-500 italic'>{data.category}.</span></p>
                    <hr />
                    <p className='text-green-400 text-3xl font-semibold'>Available Stock: <span className='text-pink-500 italic'>{data.availableStock} <span className='text-white'>Pices.</span></span></p>
                    <hr />
                    <p>Description: {data.description}</p>
                    <p className='flex justify-between'>
                        <span className='font-semibold text-[20px] text-blue-400'>Care Level: <span className='text-pink-500 italic'>{data.careLevel}</span></span>
                        <span className='text-orange-400 text-[20px]'><span>Ration: <span>{data.rating}.</span></span></span>
                    </p>
                    <hr />
                    <p className='text-[20px]'><span className='font-bold text-green-400'>Privider:</span> {data.providerName}</p>
                    <hr />
                    <div>
                        <p className='text-3xl font-bold text-green-500'><span className='text-2xl text-pink-500'>Price:</span> {data.price}$</p>
                    </div>
                </div>



            </div>

            <h1 className='font-bold text-5xl text-center mt-20 mb-8 max-[600px]:mt-8 max-[600px]:text-[30px]'>Book Consaltation</h1>

            <div className='flax items-center py-6'>

                <form onSubmit={(event) => formSubmit(event)} className='flex flex-col items-center gap-4'>

                    <div>
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Type Your Name" name="name" required/>
                    </div>

                    <div>
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Type Your Email" name="email" required/>
                    </div>



                    <button className="btn btn-neutral mt-4" type='submit'>Book Now</button>
                </form>
                <ToastContainer />

            </div>

        </div>
    );
};

export default Viewdetail;