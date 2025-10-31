import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {

    const { user, updateUser, setUser } = use(AuthContext);
    const demoPhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';


    const upDateFormToggleBtn = () => {
        let TglBtn = document.getElementById('updateFild');
        if (TglBtn.classList.contains('hidden')) {
            TglBtn.classList.remove('hidden');
            TglBtn.classList.add('block');
        } else {
            TglBtn.classList.remove('block');
            TglBtn.classList.add('hidden');
        }


    }


    const ProfileDataUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const NAME = form.name.value.trim() === "" ? user.displayName : form.name.value.trim();
        const PHOTO = form.photourl.value.trim() === "" ? user.photoURL : form.photourl.value.trim();

        updateUser({ displayName: NAME, photoURL: PHOTO }).then(() => {
            setUser({ ...user, displayName: NAME, photoURL: PHOTO })

            const TglBtn = document.getElementById('updateFild');
            if (TglBtn) {
                TglBtn.classList.remove('block');
                TglBtn.classList.add('hidden');
            }

        }).catch(() => {
            setUser(user)
        });


        form.reset();

        // console.log(NAME, PHOTO)
    }





    return (
        <div>
            <div className='flex flex-col justify-center items-center my-12 gap-4'>
                <div className='h-[200px] w-[200px] rounded-full overflow-hidden'>
                    <img className='h-full w-full object-cover' src={user?.photoURL ? user.photoURL : demoPhoto} alt="" />
                </div>
                <h1 className='mt-4 text-[30px] font-semibold'><span>Name: </span>{user?.displayName}</h1>

                <a className='text-[20px]' href={`mailto:${user?.email}`}><span className='text-[30px] font-semibold'>Email: </span><span className='text-blue-700 underline'>{user?.email}</span></a>

                <button onClick={upDateFormToggleBtn} className='btn'>Update Your profile</button>

                <div id="updateFild" className='hidden'>

                    <form onSubmit={ProfileDataUpdate} className='flex flex-col'>
                        {/* Name */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Your Name" name='name' />
                        {/* Photo URL */} <br />
                        <label className="label">Photo URL</label>
                        <input type="url" className="input" placeholder="Photo URL" name='photourl' />
                        <br />
                        <button id='submit' type='submit' className='btn'> Save </button>
                    </form>


                </div>

            </div>
        </div>
    );
};

export default Profile;