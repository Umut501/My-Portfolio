import React, { useEffect, useState } from 'react';
import MyPhoto from '../assets/myImg.png';
import './style.css'

const About = () => {
  return (
    <section className="bg-colorb py-12">
    <div className="container mx-auto flex flex-col md:flex-row md:items-center px-8">
      <div className=" py-20 md:w-1/2 md:pl-10">
        
        <h2 className="text-4xl font-light mb-4 cursor-pointer capitalize text-custom-gray">
          About Me 
        </h2>
        <p className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
          As a graduate from ODTÜ Computer Engineering department, I have gained a strong foundation in <b>software design</b> and <b>programming</b> including Java, JavaScript, C/C++ through internships and coursework. I have also completed advanced <b>database management</b> courses, where I worked with PostgreSQL, Oracle, and Microsoft SQL Server to design and maintain data systems for various projects.
          Furthermore, I have worked with several <b>frameworks</b> and technologies such as Node.js, React.js, Angular and .Net Core.
        </p>
        <p className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
         <br /> In addition to my technical skills, I have experience working in <b>agile development</b> environments and collaborating with cross-functional teams using tools like Jira Software. I am a quick learner with a strong ability to adapt to new working environments and technologies.
        </p>
        <p className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
        <br /> Feel free to <b>contact</b> me at <b><a href="mailto:umutbaybece@gmail.com">umutbaybece@gmail.com</a></b> for any inquiries or opportunities.
        </p>
      </div>


      <div className="py-20 md:w-1/2">
        <img src={MyPhoto} alt='umutphoto' className="mx-auto w-80 rounded-full mb-4 mt-10" />
      </div>
    </div>


  </section>
  );
  
};

export default About;
