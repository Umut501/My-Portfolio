import React from 'react';
import './style.css'
const Home = () => {

  return (

    <section>
      <div className="bg-purple" >
        <div className='flex w-full md:w-auto py-4  items-center justify-center'>

          <div className='pointer-events-none py-16 px-32 whitespace-wrap text-9xl md:text-6xl text-left'>
            <span className=' text-9xl mb-4 cursor-pointer capitalize text-custom-gray  text-custom-header bella'>
              <span className='whitespace-nowrap  text-4xl signature before:block before:absolute before:-inset-6 before:-skew-y-3relative inline-block'>
                <span class="relative  text-white">👋Hi I'm Umut </span>       <br />
              </span>
              <br />
              Ever  <span className='textoutline text-purple'> wondered </span> what happens when <span className='gradient-text '>creativity </span>
              meets
              <span className='text-greenhaze '> coding?</span>
              <br />
              
              <br />
              <span className='text-grayishwhite '></span>this  <span className='text-grayishwhite textoutline'>portfolio</span> is the <span className='textoutline text-purple'> answer. </span>
            </span>

            <span className='text-9xl mb-4 cursor-pointer capitalize text-  text-custom-header  bella'>
              <br />
            </span>

            <br />
          </div>
        </div>
      </div>

      <style>

      </style>
    </section>

  );

};

export default Home;
