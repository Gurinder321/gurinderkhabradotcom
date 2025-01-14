import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const Hero = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    
    <div  style={{
        backgroundColor: isDarkMode ? "#171C28" : "#ffffff",
        color: isDarkMode ? "white" : "#444452",
      }}>
<header className="flex justify-between items-center w-full px-6 md:px-20 lg:px-100 pt-4">
  <div className="text-xl font-bold"><Link href={"/blogs/googleKnowledge"}>About Me</Link></div>
  <div className="flex items-center space-x-4">
    <button className="text-xl font-medium" onClick={toggleTheme}>
      ☀️
    </button>
  </div>
</header>
<div className='px-6 md:px-20 lg:px-100 py-120'>
      <div className="flex justify-between items-center">
   <h1 className="my-10 font-medium text-4xl">
    Hello! 👋
   </h1>
  
  </div>
  <div>
  <h2 className="text-5xl font-300 leading-snug py-14 w-full lg:w-2/3">
     I'm <span className="text-blue-600">Gurinder Khabra</span>
     , a systems-focused GTM & RevOps consultant specializing in building systems and pipelines
</h2>
  </div>
  <p className="mt-6 text-lg">
     Get in touch 👉
     <a className="text-blue-600 underline" href="mailto:hello@example.com">
      hello@example.com
     </a>
    </p>
  </div>

  <main className="px-6 md:px-20 lg:px-100">
   {/* <section className="mt-12">
    <h2 className="text-4xl font-bold leading-snug">
     I'm <span className="text-blue-600">Gurinder Khabra</span>
     , a design-minded front-end software engineer focused on building beautiful interfaces &amp; experiences 🖌️ <Link href={"/blogs/googleKnowledge"}>More about me</Link>
    </h2>
    <p className="mt-6 text-lg">
     Get in touch 👉
     <a className="text-blue-600 underline" href="mailto:hello@example.com">
      hello@example.com
     </a>
    </p>
   </section> */}
   <section className="">
    <h3 className="text-blue-600 text-sm font-semibold">
     ABOUT ME
    </h3>
    <p className="mt-4 text-gray-700 leading-relaxed">
    I’m Gurinder Khabra, a passionate GTM & RevOps consultant specializing in building robust systems and pipelines. Currently, I’m helping companies streamline their operations with strategic marketing automations and systems, ensuring smoother workflows and greater efficiency.
    </p>
    <p className="mt-4 text-gray-700 leading-relaxed">
    Here are a few areas I’m focused on:
    </p>
    <ul className="mt-1  text-gray-700">
     <li className='py-2'>
     - Building high-performing systems and pipelines for businesses.
     </li>
     <li className='py-2'>
     - Implementing RevOps and GTM strategies at top-tier companies.

     </li>
     <li className='py-2'>
     - Leading strategic marketing automation initiatives to drive growth.
     </li>
    
    </ul>
   </section>
   <section className="mt-20">
    <h3 className="text-blue-600 text-sm font-semibold">
     WORK EXPERIENCE
    </h3>
    <table className="mt-6 w-full text-left text-gray-700">
     <thead>
      <tr>
       <th className="font-medium">
        Company
       </th>
       <th className="font-medium">
        Location
       </th>
       <th className="font-medium">
        Position
       </th>
       <th className="font-medium">
        Duration
       </th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>
        Pacific Group
       </td>
       <td>
        Las Vegas, NV
       </td>
       <td>
        Founder
       </td>
       <td>
        2018 - Present
       </td>
      </tr>
      <tr>
       <td>
        FargoHub
       </td>
       <td>
        Remote
       </td>
       <td>
        Partner
       </td>
       <td>
        2014 - 2016
       </td>
      </tr>
     </tbody>
    </table>
   </section>
   <section className="mt-20">
    <h3 className="text-blue-600 text-sm font-semibold">
     FEATURED PROJECTS
    </h3>
    <div className="mt-6 space-y-12">
     <div className="flex flex-col md:flex-row items-center">
      <img alt="Project 1 preview" className="w-full md:w-1/2 rounded-lg shadow-md" height="400" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-f8Iej3CGmUqy0x4m2bjIHNtm/user-hu28pZNKJnCnONv28cfjKXcI/img-ZigTDfzXnf1uXzYGiZydOFjs.png?st=2025-01-13T17%3A02%3A29Z&amp;se=2025-01-13T19%3A02%3A29Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2025-01-13T02%3A20%3A02Z&amp;ske=2025-01-14T02%3A20%3A02Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=prE7Jq1EZtU/LxZZULOXUYs7OWLKvTFlz0kl8dz6Les%3D" width="600"/>
      <div className="mt-6 md:mt-0 md:ml-8">
       <h4 className="text-lg font-semibold">
        Goodbye Blisters
       </h4>
       <p className="mt-2 text-gray-700">
        A responsive web app for tracking foot health and preventing blisters.
       </p>
      </div>
     </div>
     <div className="flex flex-col md:flex-row items-center">
      <img alt="Project 2 preview" className="w-full md:w-1/2 rounded-lg shadow-md" src="https://placehold.co/600x400"/>
      <div className="mt-6 md:mt-0 md:ml-8">
       <h4 className="text-lg font-semibold">
        Interventions
       </h4>
       <p className="mt-2 text-gray-700">
        A platform for connecting people with mental health resources.
       </p>
      </div>
     </div>
    </div>
   </section>
   <section className="mt-20">
    <h3 className="text-blue-600 text-sm font-semibold">
     OTHER PROJECTS
    </h3>
    <div className="mt-6 space-y-6">
     <div>
      <h4 className="text-lg font-semibold">
       Project Name
      </h4>
      <p className="mt-2 text-gray-700">
       A brief description of the project.
      </p>
      <div className="mt-2">
       <a className="text-blue-600 underline" href="#">
        View Project
       </a>
      </div>
     </div>
     <div>
      <h4 className="text-lg font-semibold">
       Project Name
      </h4>
      <p className="mt-2 text-gray-700">
       A brief description of the project.
      </p>
      <div className="mt-2">
       <a className="text-blue-600 underline" href="#">
        View Project
       </a>
      </div>
     </div>
    </div>
   </section>
  </main>
  <footer className="mt-20 p-6 text-center text-gray-600">
   <p>
    Designed &amp; Built by Gurinder Khabra
   </p>
  </footer>

    </div>
  )
}

export default Hero