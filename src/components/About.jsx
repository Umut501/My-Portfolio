import React from 'react';
import './style.css'
import arrow from '../assets/arrow.svg';
import leftdownarrow from '../assets/leftdownarrow.svg';

const About = () => {
  return (
    
    <section className="bg-green py-12 relative flex flex-col items-center ">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-center px-8 tracking-wide ">
        <div className="py-20  ">
          <h2 className="bella text-9xl font-bold mb-4 cursor-none capitalize text-custom-header" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
            About Me.
          </h2>
          <br />
          <b>
          <div class="px-2">
            <div class="flex flex-wrap -mx-2">
              <div class="w-full xl:w-1/3 mb-4">
                <div className="flex items-center justify-center relative">
                  <div className="max-w-md line_empty w-full py-6 bg-grayishwhite rounded-[1.5rem] border-2 border-custom-gray relative">
                    <div className="flex circle_empty">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="lineo"></div>
                    <p className="text-truncate ">
                      <p className="text-lg text-custom-gray max-w-lg px-6 py-2  " style={{ textAlign: 'justify', textJustify: 'distribute', overflow: 'hidden', whiteSpace: 'pre-wrap' }}>
                        I am a <i>Computer Engineer</i> and a proud graduate of Middle East Technical University. My academic journey has equipped me with a robust foundation in software design and programming, where I mastered languages like <i>Java, C, and C#</i>. Through internships and coursework, I've honed my skills in dynamic problem-solving.
                        Also, I have delved into advanced <i>database management</i> courses, working with technologies such as <i>PostgreSQL, Oracle, and Microsoft SQL Server</i> to design and maintain data systems for diverse projects.

                      </p>
                    </p>
                  </div>
                </div>

              </div>

              &nbsp; &nbsp;<img className='invisible xl:visible'  alt="Meaningful description" src={arrow} />&nbsp; &nbsp;
              {/* credit vereceğim : https://www.figma.com/community/file/1023982676669485624 */}


              <div class="w-full xl:w-1/3 mb-4">
                <div className="flex items-center justify-center relative">
                  <div className="max-w-md line_empty w-full py-6 bg-grayishwhite rounded-[1.5rem] border-2 border-custom-gray relative">
                    <div className="flex circle_empty">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="lineo"></div>
                    <p className="text-truncate">
                      <p className="text-lg text-custom-gray max-w-lg px-6 py-2 " style={{ textAlign: 'justify', textJustify: 'distribute', overflow: 'hidden', whiteSpace: 'pre-wrap' }}>
                        Beyond my academic achievements, my professional role as a Software Developer at KOD YAZILIM PROJE HİZ. TUR. TİC. A.Ş. focuses on <i>web application development</i>. I specialize in utilizing technologies like <i>ASP.NET Core, Angular, and PostgreSQL</i> to create pages and services for ERP management, ensuring optimal functionality and a user-friendly interface.
                      </p>
                    </p>
                  </div>
                </div>
                <br />
                <img className='hidden xl:block'  alt="Meaningful description" src={leftdownarrow} />
                {/* credit vereceğim : https://www.figma.com/community/file/1023982676669485624 */}
              </div>
              
              <div class="w-full xl:w-1/3  mb-4"></div>
              
              <div class="w-full xl:w-1/3  mb-4">
                <div className="flex items-center justify-center relative">
                  <div className="max-w-md line_empty w-full py-6 bg-grayishwhite rounded-[1.5rem] border-2 border-custom-gray relative">
                    <div className="flex circle_empty">
                      <div className="circle"></div>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                    <div className="lineo"></div>
                    <p className="text-truncate">
                      <p className="text-lg text-custom-gray max-w-lg px-6 py-2 " style={{ textAlign: 'justify', textJustify: 'distribute', overflow: 'hidden', whiteSpace: 'pre-wrap' }}>

                        I thrive in <i>agile development environments</i> and collaborate seamlessly with cross-functional teams using tools like <i>Jira Software</i>. Known for quick learning abilities and adaptability to new technologies, I am always eager to tackle challenging problems and contribute to innovative solutions.
                      </p>
                      <p className="text-lg text-custom-gray max-w-lg px-6 py-2 " style={{ textAlign: 'justify', textJustify: 'distribute', overflow: 'hidden', whiteSpace: 'pre-wrap' }}>

                        Feel free to <i>contact</i> me at <i><a href="mailto:umutbaybece@gmail.com">umutbaybece@gmail.com</a></i> for any inquiries, collaborations, or exciting opportunities. Let's build something amazing together!
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </b>
        </div></div>
    </section>
  );

};

export default About;
