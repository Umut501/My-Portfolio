import React from 'react';
import './style.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container cursor-none">
      <div className="footer-content">
        <p className="footer-text "> 
          &copy; {currentYear} Umut Baybece | All rights reserved
          <p className="footer-text"> </p>
        </p>

        <p className="footer-text">
          <b>Made with React | </b>
          <div class="tooltip">See Credits
  <span class="tooltiptext">


Copyright (c) 2024 by Juxtopposed (https://codepen.io/Juxtopposed/pen/OJrLZvb)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

&nbps;
Copyright (c) 2022 by naga tarun (https://www.figma.com/community/file/1023982676669485624) 
Licensed under CC BY 4.0
Arrows collection

&nbps;
https://befonts.com/bella-sophie-font.html
Designer : Sansakerta
License : Free for Personal Use
    
  </span>
</div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
