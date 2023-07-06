import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Bottom from './Components/Bottom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function App() {
  useEffect(() => {
    document.title = 'Pirvan Cosmin';
  }, []);
  const [text, setText] = useState('About me');
  const handleMouseOver = () => {
    setText('Cosmin');
  }
  const handleMouseOut = () => {
    setText('About Me');
  }

  return (
    <>
      <Header />
      <section className="presentation">
          <h2 className="hello">Hi, I'm Cosmin <br />  Web developer <br />  <img src='programmer.png' className='devImg' alt='devimg' /> </h2>
      </section>
      <article className="aboutMe" id="about">
        <div className='h2title' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> <h2>{text}</h2></div>
        <div className="container">
          <p className="textAM">
            Since an early age I have always been curious and passionate about everything related to technology.
            <br /> I started to learn programming and gained valuable experience in languages such as <b className='bMod'>C++</b>, <b className='bMod'>Javascript</b>, <b className='bMod'>HTML</b>, and <b className='bMod'>CSS</b>.
            <br /> Now, I'm enthusiastic to find a role where I can continue learning and growing.
            I'm a fast learner and have a strong desire to acquire new skills.
            <br /> I am determined to contribute to innovative projects and be part of a dynamic team that encourages creativity and continuous learning.
            Ready to take on new challenges, I am motivated to push boundaries and embrace the ever-evolving nature of the industry.</p>
          <img className="img1" src="icon-dev.png" alt="logo" width="250px" height="250px" />
        </div>
      </article>
      <article>
        <div id="projectsH" className='projectSection'>
          <h2 className='h2title'>Projects</h2>
          <p className='textP'>Here are a few projects I have worked on recently, with more exciting projects to come in the future.</p>
          <div className='projects'>
            <div className='project'>
              <a href='https://calculator-pirvan.netlify.app/'>
                <img src='calc.png' alt='calculator' className='projectImg' />
                <div className="overlay">
                  <p>Calculator Project</p>
                </div>
              </a>
            </div>
            <div className='project'>
              <a href='https://pcbinaryconverter.netlify.app/'>
                <img src='bin.png' alt='converter' className='projectImg' />
                <div className="overlay">
                  <p>Binary Converter Project</p>
                </div>
              </a>
            </div>
            <div className='project'>
              <a href='https://pcweather.netlify.app/'>
                <img src='weather.png' alt='weather' className='projectImg' />
                <div className="overlay">
                  <p>Weather App Project</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </article>
      <div className="contact" id="contact">
        <img className='imgMail' src='./mailImg1.png' alt='imagMail'></img>
        <h2 className="h2title">CONTACT ME</h2>
        <p className='pContact'><strong>EMAIL:</strong> pirvancosmin@outlook.com</p>
        <p className='pContact'><strong>PHONE:</strong> +40 761 987 710</p>
        <div className='buttonStyle'>
          <button className='linkedin-button' onClick={() => window.open('https://ro.linkedin.com/in/pirvancosmin?trk=profile-badge')}>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </button>
          <button className='github-button' onClick={() => window.open('https://github.com/pirvancosmin')}>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </button>
        </div>
      </div>
      <Bottom />
    </>
  );
}

export default App;
