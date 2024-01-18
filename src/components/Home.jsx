import React from 'react';
import './style.css'
import { MdComputer } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import arrowdown from '../assets/arrowdown.svg';
const Home = () => {

  return (

    <section>
      <div className="bg-purple" >
        <div className='flex w-full md:w-auto py-4  items-center justify-center'>

          <div className='pointer-events-none py-32 px-32 whitespace-wrap text-9xl md:text-6xl text-left'>
            <span className='text-9xl mb-4 cursor-pointer capitalize text-grayishwhite text-custom-header  bella'>
              <span className='text-4xl signature before:block before:absolute before:-inset-6 before:-skew-y-3 before:bg-custom-gray relative inline-block'>
                <span class="relative text-white">👋Hi I'm Umut</span>       <br />
              </span>
              <br />
              <span className='z-40'>welcome to my portfolio page – a glimpse into the  </span>
              <span className='text-custom-gray '> magic  </span> I create! <br />
              -<br />
              I'm a WEB DEVELOPER  AND DESIGNER 💻
              <br />



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
