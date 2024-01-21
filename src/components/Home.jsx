
import React from 'react';
import './style.css';
import '../assets/Seth Godin.png';
import cngguy from '../assets/cngguy.svg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Resume from '../components/Resume';

const Home = () => {
  return (
    <section className="flex flex-col bg-white cursor-none cd-intro">
      <div className='py-28 pb-36 flex'>
        {/* Content */}
        <div className='flex flex-col items-right top-0 cd-intro-content bouncy'>
          <div className=' md:py-4 md:px-32 text-left'>
            <span className='text-2xl mb-4 capitalize text-custom-gray text-custom-header bella'>
              <span className='whitespace-nowrap text-2xl signature before:block before:absolute before:-inset-6 before:-skew-y-3 relative inline-block'>
                <span className="relative text-xl text-custom-gray">👋Hi I'm Umut </span> <br /><br />
              </span>
              <br />
              <div className="whitespace-nowrap text-9xl">
                I'm a&nbsp;
                <span className='textoutline text-purple whitespace-nowrap'>
                  <span className="kdey">D</span>
                  <span className="kdey">E</span>
                  <span className="kdey">S</span>
                  <span className="kdey">I</span>
                  <span className="kdey">G</span>
                  <span className="kdey">N</span>
                  <span className="kdey">E</span>
                  <span className="kdey">R</span>
                </span>
                <span className='Rubik text-xl'><b> &</b></span>
              </div>
              <span className='px-4 text-9xl'>Developer</span><br />
              <br />
              {/* Navigation links */}
              <div className='flex flex-col items-start md:flex-row whitespace-nowrap justify-start'>
                <a href="#home" className="text-custom-gray px-4 ">Home</a>
                <a href="#about" className="text-custom-gray px-4">About</a>
                <a href="#skills" className="text-custom-gray px-4">Skills</a>
                <a href="#experience" className="text-custom-gray px-4">Experience</a>
                <a href="#projects" className="text-custom-gray px-4">Projects</a>
                <a href="#contact" className="text-custom-gray px-4">Contact</a>
                <Resume></Resume> <span className='invisible md:visible'>|</span>
                <a href='https://github.com/Umut501' target="_blank" rel="noopener noreferrer" className="text-custom-gray px-4 ">
                  <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/umut-baybece-6a1303201/' target="_blank" rel="noopener noreferrer" className="text-custom-gray px-4 ">
                  <FaLinkedin />
                </a>
              </div>
              <br />
            </span>
          </div>


        </div>

        {/* Cngguy Image */}   <div className='invisible md:visible bg-white w-full flex left-10 justify-start items-center'>
          <img src={cngguy} alt="cngguy" className='w-full px-4' />
          {/* https://www.streamlinehq.com/ bu siteyi vereceğim credit olarak yeterli */}
        </div>
        {/* <img src={require('../assets/Seth Godin.png')} alt="Seth Godin" className='w-12/12' /> */}

      </div>
      {/* Copyright (c) 2024 by Juxtopposed (https://codepen.io/Juxtopposed/pen/OJrLZvb)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/}
    </section>

  );
};

export default Home;

