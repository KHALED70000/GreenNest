import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Swiperhero = () => {
    return (
        // <Swiper slidesPerView={1} autoplay={{ delay: 2500 }}>
        //     <SwiperSlide><img className='w-full h-[500px]' src="https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=1024x1024&w=is&k=20&c=EWTo2iZxyGXOZ_aF9UUJ8UgYQD5uG2rs5hFSi9jnJXk=" /></SwiperSlide>
        //     <SwiperSlide><img className='w-full h-[500px]' src="https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=1024x1024&w=is&k=20&c=EWTo2iZxyGXOZ_aF9UUJ8UgYQD5uG2rs5hFSi9jnJXk=" /></SwiperSlide>
        // </Swiper>
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full h-[500px] max-[600px]:h-[300px]' src="https://media.istockphoto.com/id/476116580/photo/sycamore-tree-in-summer-field-at-sunset-england-uk.jpg?s=1024x1024&w=is&k=20&c=EWTo2iZxyGXOZ_aF9UUJ8UgYQD5uG2rs5hFSi9jnJXk=" alt="slide 1" />
                    <h2 className='font-bold text-5xl text-center absolute top-[50%] bottom-[-50%] text-black w-full'>
                        Care for your plants, they will <br /> care for your soul.
                    </h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className='w-full h-[500px] max-[600px]:h-[300px]' src="https://media.istockphoto.com/id/659661462/photo/angel-oak-tree.jpg?s=1024x1024&w=is&k=20&c=u-xXj9KshqcipfDRXwhJ9S32E1VLfR168jBMOMpU5pk=" alt="slide 2" />
                     <h2 className='font-bold text-5xl text-center absolute top-[50%] bottom-[-50%] text-black w-full max-[600px]:text-[30px]'>
                        Care for your plants, they will <br /> care for your soul.
                    </h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className='w-full h-[500px] max-[600px]:h-[300px]' src="https://media.istockphoto.com/id/177013469/photo/oak-tree.jpg?s=1024x1024&w=is&k=20&c=f_GQQSvZ7GzJEEK851exswBdfp5gppx0ZY8OfzSUnlg=" alt="slide 3" />
                     <h2 className='font-bold text-5xl text-center absolute top-[50%] bottom-[-50%] text-black w-full'>
                        Care for your plants, they will <br /> care for your soul.
                    </h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className='w-full h-[500px] max-[600px]:h-[300px]' src="https://media.istockphoto.com/id/505228567/photo/little-girl-sitting-on-centennial-tree.jpg?s=1024x1024&w=is&k=20&c=-NCiubd9vfPN4g2dOomdSbvp8NuhNrZ7i3xlwVgdyEI=" alt="slide 3" />
                     <h2 className='font-bold text-5xl text-center absolute top-[50%] bottom-[-50%] text-black w-full'>
                        Care for your plants, they will <br /> care for your soul.
                    </h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img className='w-full h-[500px] max-[600px]:h-[300px]' src="https://media.istockphoto.com/id/598058914/photo/the-sun-shining-through-a-majestic-oak-tree.jpg?s=1024x1024&w=is&k=20&c=pXd0ViL6SVZplmScjhR2KNy59sc8Zzuo7u9WAGWbMUE=" alt="slide 3" />
                     <h2 className='font-bold text-5xl text-center absolute top-[50%] bottom-[-50%] text-black w-full'>
                        Care for your plants, they will <br /> care for your soul.
                    </h2>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Swiperhero;