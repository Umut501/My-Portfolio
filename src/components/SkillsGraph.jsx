import React from 'react';
import './style.css';
import sql from '../assets/Postgresql.svg';
import java from '../assets/Java_logo_PNG7.png';
import csharp from '../assets/Logo_C_sharp.svg';
import css from '../assets/css.png';
import html from '../assets/html.png';
import react from '../assets/react.png';
import angular from '../assets/Angular_full_color_logo.svg';
import jira from '../assets/Jira.svg';
import netcore from '../assets/NET_Core_Logo.svg';
import GitHub from '../assets/github-mark.png';
import JS from '../assets/javascript.png';
import ms from '../assets/Microsoft Office.png';
import tailwind from '../assets/tailwind.png';


const SkillsGraph = () => {
    
  return (
    <section className="bg-yellow py-12 container">
      

<div className="graph text-custom-gray cursor-none">
      <div className="icon-row">
        <div className="icon-container">
          <img src={sql} alt="PostgreSQL" />
          <span>PostgreSQL</span>
        </div>
        <div className="icon-container">
          <img src={java} alt="Java" />
          <span>Java</span>
        </div>
        <div className="icon-container">
          <img src={csharp} alt="C#" />
          <span>C#</span>
        </div>
        <div className="icon-container">
          <img src={netcore} alt=".NET Core" />
          <span>.NET Core</span>
        </div>
      </div>
      <div className="icon-row">
        <div className="icon-container">
          <img src={html} alt="HTML" />
          <span>HTML</span>
        </div>
        <div className="icon-container">
          <img src={css} alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="icon-container">
          <img src={JS} alt="JS" />
          <span>Java Script</span>
        </div>
        <div className="icon-container">
          <img src={react} alt="React.js" />
          <span>React.js</span>
        </div>
        <div className="icon-container">
          <img src={angular} alt="Angular" />
          <span>Angular</span>
        </div>
      </div>
      
      <div className="icon-row">
      <div className="icon-container">
          <img src={tailwind} alt="tailwind" />
          <span>TailWind CSS</span>
        </div>
        <div className="icon-container">
          <img src={jira} alt="Jira" />
          <span>Jira</span>
        </div>
        <div className="icon-container">
          <img src={GitHub} alt="GitHub" />
          <span>GitHub</span>
        </div>
        <div className="icon-container">
        <img src={ms} alt="MS Office Suite" />
          <span>MS Office Suite</span>
        </div>
      </div>
    </div>

  </section>
  );
  
};

export default SkillsGraph;
