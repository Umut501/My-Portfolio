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
    <div className='animate-fade-down flex justify-between items-center w-full z-40 h-20 px-4 bg-navbarbg fixed  bg-opacity-40 backdrop-filter backdrop-blur-lg '>
        <div className='md:hidden'>
            <button className='text-3xl' onClick={toggleMenu}>
                {showMenu ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      
      <div className='hidden md:flex'>
        <ul className='flex ml-4'>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#home">Home</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#about">About</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#skills">Skills</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#experience">Experience</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#projects">Projects</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#contact">Contact</a>
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
        <div className=' animate-fade-up md:hidden w-full h-screen fixed top-0 left-0 bg-navbarbg'>
          <ul className='flex flex-col items-center mt-20'>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#experience" onClick={closeMenu}>Experience</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li className='text-2xl font-light px-4 cursor-pointer capitalize text-custom-gray'>
            <a href="#contact" onClick={closeMenu}>Contact</a>
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
