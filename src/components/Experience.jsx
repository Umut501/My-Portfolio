import React from 'react'
import './style.css'
import bgphoto from '../assets/bgfor.jpg';

const Experience = () => {
  return (
    <section className="bg-colorb py-12">
   <div className="container mx-auto flex flex-col md:flex-row md:items-center px-8">
   

      <div className="py-20 md:w-1/2 md:pl-10">
        <h2 className="text-4xl font-light mb-4 cursor-pointer capitalize text-custom-gray">
          Experience
        </h2>
        <div className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
        <ul class="list-disc pl-6">
       
      <span class="text-2xl mb-2">Internship at ADOPEN <br />(August 2022 - September 2022):</span>
      <ul class="list-disc pl-6">
        <li class="mb-2">Created a stock management application using .NET Framework and Windows Forms.</li>
        <li class="mb-2">Utilized PostgreSQL for data table implementation and query optimizations.</li>
        <li class="mb-2">Implemented dynamic stock code generation algorithms.</li>
        <li class="mb-2">Developed admin and user pages with an authentication-controlled login system.</li>
        <li class="mb-2">Applied CRUD operations with error controls.</li>
        <li class="mb-2">Designed the user interfaces of the application.</li>
      </ul>
    </ul>

        </div>

      </div>
      
      <div className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>


      <ul class="list-disc pl-6">
  <br />

  <span class="text-2xl mb-2">Internship at Kod Yazılım Proje Hiz. Tur. Tic. A.Ş. (February 2022 - March 2022):</span>
  <ul class="list-disc pl-6">
    
    <li class="mb-2">Gained practical knowledge and understanding of ASP.NET Core and Angular.</li>
    <li class="mb-2">Developed a car tracking web application using Angular, ASP.NET Core, and Microsoft SQL Server Management Studio.</li>
    <li class="mb-2">Created a registration page using ASP.NET Core Identity.</li>
    <li class="mb-2">Utilized Postman for software testing.</li>
    <li class="mb-2">Used Bootstrap to enhance the user interface and make it more user-friendly.</li>
  </ul>
</ul>
</div>
      </div>
      


  </section>
  )
}

export default Experience