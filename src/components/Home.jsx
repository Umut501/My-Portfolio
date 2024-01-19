import React from 'react';
import './style.css'


const Home = () => {
  return (
    <section>
      <div className="bg-purple cursor-none" >
        <div className='flex w-full md:w-auto py-4  items-center justify-left pointer-events-none'>
          <div className='py-16 px-32 whitespace-wrap text-9xl md:text-6xl text-left'>
            <span className=' text-9xl mb-4 capitalize text-custom-gray  text-custom-header bella'>
              <span className='whitespace-nowrap  text-4xl signature before:block before:absolute before:-inset-6 before:-skew-y-3 relative inline-block'>
                <span class="relative  text-white">👋Hi I'm Umut </span>
                <br />
              </span>
              <br />
              <div class="keyboard">
                I'm a&nbsp;
                <span className='textoutline text-purple'>
                        {/* Copyright (c) 2024 by Juxtopposed (https://codepen.io/Juxtopposed/pen/OJrLZvb)

                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */}

                  <span class="kdey">D</span>
                  <span class="kdey">E</span>
                  <span class="kdey">S</span>
                  <span class="kdey">I</span>
                  <span class="kdey">G</span>
                  <span class="kdey">N</span>
                  <span class="kdey">E</span>
                  <span class="kdey">R</span>
                </span> &nbsp;
                <span className='Rubik text-4xl'><b>&</b></span>
              </div>
              <span className='gradient-text '>Developer</span>
            </span>
          </div>
  
 
          
        </div>

      </div>

    </section>
  );
};

export default Home;
