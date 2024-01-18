import React from 'react'
import './style.css'

const Experience = () => {
  return (
    <section className="bg-green py-12">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center px-8">


        <div className="py-20 md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold mb-4 cursor-pointer capitalize text-custom-gray">
            Experience
          </h2>
          <div className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>
            <ul class="list-disc pl-6">

              <span class="text-2xl mb-2">Full Stack Developer at Kod Yazılım ve Proje Hizmetleri <br />(August 2023 - Present):</span>
              <ul class="list-disc pl-6">
                <li class="mb-2"> Developed pages and services for an ERP management web application by using Angular with DevExtreme components , ASP.NET Core, and PostgreSQL.</li>
                <li class="mb-2"> Developed pages and services for an Hotel Reservation web application by using Angular with Angular Material, ASP.NET Core, and PostgreSQL.</li>
                <li class="mb-2"> Utilized PostgreSQL for data table implementation and query optimizations.</li>
                <li class="mb-2"> Used Postman for software testing.</li>
                <li class="mb-2"> Used Tailwind CSS for building a more user-friendly interfaces with DevExtreme components.</li>
                <li class="mb-2"> Implemented CRUD operation services with C# using .NET Core</li>
                <li class="mb-2"> Implemented authentication and authorization services with C# using .NET Core</li>
              </ul>
            </ul>

          </div>

        </div>

        <div className="text-lg text-custom-gray max-w-lg" style={{ textAlign: 'justify', textJustify: 'distribute' }}>


          <ul class="list-disc pl-6">
            <br />

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



    </section>
  )
}

export default Experience