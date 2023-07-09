import React from 'react'
import './style.css'
import SkillsGraph from "./SkillsGraph.jsx";

const Skills = () =>  {
  return (
    <section className="bg-colorb py-12">
    <div className="container mx-auto flex flex-col md:flex-row md:items-center px-8">
    <div className="py-20 md:w-1/2">
       <SkillsGraph></SkillsGraph>
      </div>
      <div className="py-20 md:w-1/2 md:pl-10">
        <h2 className="text-4xl font-light mb-4 cursor-pointer capitalize text-custom-gray">
          Skill Set
        </h2>
        


        <div className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
  <ul class="list-disc pl-6">
    <li class="mb-2">Relational Database Management: Proficient in SQL and experienced with PostgreSQL.</li>
    <li class="mb-2">Object-Oriented Software Development: Skilled in Java and C++ for building robust applications.</li>
    <li class="mb-2">Web Development &amp; UI/UX Design: Proficient in HTML, CSS, and JavaScript. Experience creating visually appealing interfaces. Familiarity with React.js and Angular.</li>
    <li class="mb-2">System Modeling: Experienced in using UML to model and represent system features and structure.</li>
    <li class="mb-2">Agile Project Management: Proficient in utilizing Jira and Scrum methodology.</li>
    <li class="mb-2">.NET Core: Experience developing applications using the .NET Core framework.</li>
    <li class="mb-2">MS Office Suite: Proficient in Word, Excel, and PowerPoint.</li>
    <li class="mb-2">Fluent in English: Excellent verbal and written communication skills.</li>
  </ul>
</div>



      </div>

    </div>
  </section>
  )
}

export default Skills