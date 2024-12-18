import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'animate.css/animate.min.css'; 
import 'aos/dist/aos.css'; 

import sliderOne from '../../assets/gettyimages-1225346915.jpg';
import sliderTwo from '../../assets/kolukkumalai-tea-estate-munnar-tourism-entry-fee-timings-holidays-reviews-header.jpg';
import sliderThree from '../../assets/new-cc-webpage-hero-1920x1080.jpg';
import AOS from 'aos';

const Slider = () => {
  useEffect(() => {
    
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className='bg-red-400 h-[500px]'
          style={{
            backgroundImage: `url(${sliderOne})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data-aos="fade-up" 
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-1"></div>
          
          <h3 className="z-10 text-white font-bold text-4xl text-center lg:text-6xl py-1 animate__animated animate__fadeIn">
            Conquer the Peaks of Adventure
          </h3>

          <p className='text-gray-300 text-center lg:px-10 z-10 text-lg mt-4 py-3'>
            Venture into the majestic Andes, where rugged trails meet breathtaking vistas. Experience the thrill of high-altitude trekking, ancient paths, and a journey through South America’s awe-inspiring landscapes.
          </p>

         
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className='bg-red-400 h-[500px]'
          style={{
            backgroundImage: `url(${sliderTwo})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data-aos="fade-up" 
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-1"></div>
          
          <h3 className="z-10 text-white font-bold text-4xl text-center lg:text-6xl py-1 animate__animated animate__fadeIn">
            Wander Through Lush Green Paradises
          </h3>

          <p className='text-gray-300 text-center lg:px-10 z-10 text-lg mt-4 py-3'>
            Discover the enchanting beauty of Munnar’s sprawling tea plantations. Immerse yourself in the serenity of rolling hills, misty trails, and a refreshing escape into nature’s finest tea estates.
          </p>

        
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="bg-red-400 h-[500px] relative"
          style={{
            backgroundImage: `url(${sliderThree})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          data-aos="fade-up" 
        >
          {/* Black overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-1"></div>

          <h3 className="z-10 text-white font-bold text-4xl text-center lg:text-6xl py-1 animate__animated animate__fadeIn">
            A Journey to the Heart of Nature
          </h3>

          <p className='text-gray-300 text-center lg:px-10 z-10 text-lg mt-4 py-3'>
            Embark on a once-in-a-lifetime adventure through the breathtaking peaks and serene valleys of the Swiss Alps. Experience world-class hiking, scenic views, and unforgettable moments in one of the most majestic mountain ranges on Earth.
          </p>

        
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
