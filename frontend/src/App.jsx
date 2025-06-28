import React from 'react';
import './App.css';
import logo from './Logo.png';
import SkillForm from './components/SkillForm';
import ResumeForm from './components/ResumeForm';

function App() {
  return (
    <div className='app-container'>
      <header className='app-header'>
        <img src={logo} alt='SkillSync Logo' className='logo'/>
         <h1 className="header-title">SkillSync</h1>
      </header>

       <main className="main-content">
        <h2>🚀 Smart Skill Gap Analyzer</h2>
        <p>Enter your job title and your current skills to see what you're missing!</p>
        <SkillForm />
        <h2>---X---</h2>
        <h2 className="mt-10"> 📄 Resume-Based Skill Recommendation</h2>
        <p>Paste your resume below and get intelligent recommendations.</p>
        <ResumeForm />
      </main>

      <footer className="app-footer">
        Made by Yashvardhan
      </footer>
    </div>
  );
}

export default App;
