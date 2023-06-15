import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Bottom from './Bottom';
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
        <div>
          <h2 className="hello">Hi, I'm Cosmin <br />  Web developer <br />  <img src='dev.png' className='devImg' alt='devimg' /> </h2>
        </div>
      </section>
      <article className="aboutMe" id="about">
        <div className='h2title' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}> <h2>{text}</h2></div>
        <div className="container">
          <p className="textAM">Since an early age I have been always curious and passionate about everything related to technology.
            <br /> I started to learn programming and <br /> I gained some experience in <b>C++</b>, <b>Javascript</b>, <b>HTML</b> and <b>CSS</b>.
            Now, I'm eager to find a role where I can continue learning and growing. I'm a fast learner and have a strong desire to acquire new skills. </p>
          <img className="img1" src="https://dezinsinteractive.com/wp-content/uploads/2018/12/icon-dev.png" alt="logo" width="250px" height="250px" />
        </div>
      </article>
      <article>
        <div id="projectsH" className='projectSection'>
          <h2 className='h2title'>Projects</h2>
          <p className='textP'>Here are few projects made by me (in progress)</p>
          <div className='projects'>
            <div className='project'>
              <a href='https://calculator-pirvan.netlify.app/'>
                <img src='calc.png' alt='calculator' className='projectImg' />
              </a>
            </div>
            <div className='project'>
              <a href='https://pcbinaryconverter.netlify.app/'>
                <img src='bin.png' alt='converter' className='projectImg' />
              </a>
            </div>
            <div className='project'>
              <div>
                <img src='test1.png' alt='test1' className='projectImg' />
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="contact" id="contact">
        <h2 className="h2title">CONTACT ME</h2>
        <p><strong>EMAIL:</strong> pirvancosmin@outlook.com</p>
        <p><strong>PHONE:</strong> +40 761 987 710</p>
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
