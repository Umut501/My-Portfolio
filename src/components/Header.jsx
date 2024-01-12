import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Resume from '../components/Resume'
import './style.css'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className='animate-fade-down flex justify-between items-center w-full z-40 h-20 px-4 bg-222222 fixed  bg-opacity-40 backdrop-filter backdrop-blur-lg '>
        <div className='md:hidden'>
            <button className='text-3xl' onClick={toggleMenu}>
                {showMenu ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      
      <div className='hidden md:flex'>
        <ul className='flex ml-4'>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section1">Home</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section2">About</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section3">Skills</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section4">Experience</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section5">Projects</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section6">Contact</a>
          </li>         
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <Resume></Resume>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <br />
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <br />
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <br />
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <br />
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <br />
          </li>
          
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray ml-auto'>
            <a href='https://www.linkedin.com/in/umut-baybece-6a1303201/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray ml-auto'>
            <a href='https://github.com/Umut501' target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>


      </div>
      
      {showMenu && (
        <div className=' animate-fade-up md:hidden w-full h-screen fixed top-0 left-0 bg-222222'>
          <ul className='flex flex-col items-center mt-20'>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section1" onClick={closeMenu}>Home</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section2" onClick={closeMenu}>About</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section3" onClick={closeMenu}>Skills</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section4" onClick={closeMenu}>Experience</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section5" onClick={closeMenu}>Projects</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#section6" onClick={closeMenu}>Contact</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <Resume></Resume>
          </li>

            <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray ml-auto'>
              <FaTimes onClick={closeMenu}>
              </FaTimes>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
