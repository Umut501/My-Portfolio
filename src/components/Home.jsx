import React from 'react';
import './style.css'
import parachutePhoto from '../assets/minh-pham-IisDPFNUS4k-unsplash.jpg';

const Home = () => {
  
  return (
    
    <section>
    <div className="containerbackg_property py-2" style={{ backgroundImage: `url(${parachutePhoto})`, backgroundSize: 'cover' }}>
      <div className='flex h-screen w-full md:w-auto py-4 items-center justify-center'>
       
        <div className="hidden md:flex font-light absolute bottom-20">
          <svg viewBox="0 0 100 100" width="100" height="100" className="mx-4 animate-spin-slow text-custom-gray">
            <defs>
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text fontSize={18}>
              <textPath href="#circle " >
                <tspan dy="0">Let's get creative & inspiring!</tspan>
              </textPath>
            </text>
          </svg>
        </div>

        <h1 className='font-light whitespace-wrap text-9xl md:text-9xl text-center'>
          <span className='font-signature text-center unselectable bg-clip-text text-black'>
            Umut Baybece<br />
          </span>
          <div className="container mx-auto py-4">
            <h2 className="text-4xl mb-2 text-custom-gray pt-10 px-5">
              <span className='opacity-0 unselectable'>|</span>
              Developer/Designer
            </h2>
          </div>
        </h1>
      </div>
    </div>
  </section>
  );
  
};

export default Home;
