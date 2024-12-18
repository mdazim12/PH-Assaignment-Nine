import { useEffect } from 'react';
import iconOne from '../../assets/hiking.png';
import iconTwo from '../../assets/moutain.png';
import iconThree from '../../assets/nature.png';

import 'aos/dist/aos.css';
import 'animate.css/animate.min.css'; 
import AOS from 'aos';

const Feature = () => {
  useEffect(() => {
    
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div>
      <h3 className="text-center text-5xl text-black font-bold mt-20">
        Why need to go Mountain?
      </h3>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto my-12 gap-5 justify-center">
          {/* Card 1 */}
          <div
            className="card bg-base-100 w-96 shadow-xl"
            data-aos="fade-up" 
          >
            <figure className="px-10 pt-10">
              <img
                src={iconTwo}
                alt="Mountain Icon"
                className="rounded-xl w-[100px] animate__animated animate__fadeIn"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title animate__animated animate__fadeInUp">
                Scenic Views
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Mountains are nature’s towering masterpieces, offering breathtaking views, fresh air, and a serene escape from the chaos of everyday life.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card bg-base-100 w-96 shadow-xl"
            data-aos="fade-up" 
          >
            <figure className="px-10 pt-10">
              <img
                src={iconOne}
                alt="Hiking Icon"
                className="rounded-xl w-[100px] animate__animated animate__fadeIn" 
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title animate__animated animate__fadeInUp">
                Adventure for All Levels
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Whether you are a beginner or an experienced trekker, mountain adventures offer trails and experiences tailored to every skill level.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="card bg-base-100 w-96 shadow-xl"
            data-aos="fade-up"
          >
            <figure className="px-10 pt-10">
              <img
                src={iconThree}
                alt="Nature Icon"
                className="rounded-xl w-[100px] animate__animated animate__fadeIn" 
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title animate__animated animate__fadeInUp">
                Unforgettable Memories
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Mountains create moments that last a lifetime, from watching a sunrise paint the peaks to feeling the thrill of conquering a challenging trail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
