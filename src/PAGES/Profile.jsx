import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {

    const {user} = use(AuthContext);
    const demoPhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    return (
        <div className='flex flex-col justify-center items-center my-12 gap-4'>
            <div className='h-[200px] w-[200px] rounded-full overflow-hidden'>
                <img className='h-full w-full object-cover' src={user?.photoURL ? user.photoURL : demoPhoto} alt="" />
            </div>
            <h1 className='mt-4 text-[30px] font-semibold'>{user?.displayName}</h1>
            <a className='text-[20px]' href={`mailto:${user?.email}`}><span className='text-[30px] font-semibold'>Email: </span><span className='text-blue-700 underline'>{user?.email}</span></a>
       </div>
    );
};

export default Profile;