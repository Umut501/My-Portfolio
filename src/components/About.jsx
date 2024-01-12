import MyPhoto from '../assets/myImg.png';
import React from 'react';
import './style.css'

const About = () => {
  return (
    <section className="bg-colorb py-12">
    <div className="container mx-auto flex flex-col md:flex-row md:items-center px-8">
    <div className="py-20 md:w-1/2 md:pl-10">
  <h2 className="text-4xl font-bold mb-4 cursor-pointer capitalize text-custom-header">
    About Me
  </h2>
  <p className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
    Hi there! I am a highly motivated Computer Engineer, proud graduate of Middle East Technical University. My academic journey equipped me with a strong foundation in <b>software design</b> and <b>programming</b>, mastering languages such as Java, C, and C#. I've gained practical experience through internships, work-life, and coursework, honing my skills in dynamic problem-solving.
    <br /><br />
    Advanced <b>database management</b> courses have been part of my journey, where I worked with technologies like PostgreSQL, Oracle, and Microsoft SQL Server to design and maintain data systems for diverse projects.
  </p>
  <br />
  <p className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
    Beyond my academic achievements, my professional role as a Software Developer at KOD YAZILIM PROJE HİZ. TUR. TİC. A.Ş. focuses on web application development. I specialize in utilizing technologies like ASP.NET Core, Angular, and PostgreSQL to create pages and services for ERP management, ensuring optimal functionality and a user-friendly interface.
  </p>
  <br /><br />
  <p className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
    Passionate about innovation, I have a keen interest in <b>image processing</b> and <b>computer vision</b>. My practical skills include implementing algorithms for image enhancement, feature extraction, and object recognition.
  </p>
  <br /><br />
  <p className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
    In addition to my technical prowess, I thrive in <b>agile development</b> environments. Collaborating seamlessly with cross-functional teams using tools like Jira Software is second nature to me. Known for quick learning abilities and adaptability to new technologies, I am always eager to tackle challenging problems and contribute to innovative solutions.
  </p>
  <p className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
    Feel free to <b>contact</b> me at <b><a href="mailto:umutbaybece@gmail.com">umutbaybece@gmail.com</a></b> for any inquiries, collaborations, or exciting opportunities. Let's build something amazing together!
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
