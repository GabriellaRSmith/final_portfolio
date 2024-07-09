import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//ways to contact me icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
//code button
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Carousel from './carousel';

function App() {
  const [hiddenCards, setHiddenCards] = useState(Array(6).fill(false));
  const [darkMode, setDarkMode] = useState(false);

  const handleCardClick = (index) => {
    setHiddenCards((prevHiddenCards) =>
      prevHiddenCards.map((hidden, i) => (i === index ? !hidden : hidden))
    );
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const cards = [
    <div className={`card-content ${hiddenCards[0] ? 'hidden' : ''}`} onClick={() => handleCardClick(0)}>
      <img src="WMW.jpg" alt="Card 1" />
      <img src="drop.png" className='smaller-image'/>
      <img src="banner.png" className='banner'/>
      <h2>Where's My Water</h2>
      <p>A web site integrating AI with USGS water level data to predict water levels of sites across the United States. Received first place in the UF and Verizon AI Days Hackathon 2023.</p>
      <h2>Skills Used</h2>
      <div className='skills'>
        <p>TensorFlow</p>
        <p>Flask</p>
        <p>ngrok API</p>
        <p>Google Collab</p>
      </div>
      <img src="drop.png" className='hidden-image'/>
      <div className="hidden-title">Where's My Water</div>
      <div className="hidden-info">Find out more about the project by clicking the links below!</div>
      <a href="https://github.com/AayeshaIslam/Where-s-My-Water"className="hidden-link">GitHub</a>
      <a href="https://www.youtube.com/watch?v=KFEhOcZ3WAw"className="hidden-link">Demo</a>
    </div>,
    <div className={`card-content ${hiddenCards[1] ? 'hidden' : ''}`} onClick={() => handleCardClick(1)}>
      <img style={{ width: '60%', height: '60%' }} src="research.jpeg" alt="Card 2" />
      <img style={{ top: '60px',left: '230px', width: '20%', height: '20%' }} src="aFinal.png" className='smaller-image'/>
      <h2>HIV PrEP</h2>
      <p>Web application utilizing VH agents to assist in communicating sexual health awareness to African American Young Adults. Presented current findings at UF SHPE Research Symposium.</p>
      <h2>Skills Used</h2>
      <div style={{ backgroundColor: '#FFD1DC' }} className='skills'>
        <p>Node.js</p>
        <p>OpenAI</p>
        <p>Synthesia</p>
        <p>Virtual Humans</p>
        <p>AWS</p>
      </div>
      <img style={{ width: '40%', height: '40%' }} src="aFinal.png" className='hidden-image'/>
      <div className="hidden-title">HIV PrEP</div>
      <div className="hidden-info">Find out more about the project by clicking the links below!</div>
      <a href="https://github.com/AayeshaIslam/Where-s-My-Water"className="hidden-link">GitHub</a>
      <a href="https://www.youtube.com/watch?v=KFEhOcZ3WAw"className="hidden-link">Demo</a>
    </div>,
    <div className={`card-content ${hiddenCards[2] ? 'hidden' : ''}`} onClick={() => handleCardClick(2)}>
      <img src="wingcity.png" alt="Card 3" />
      <img style={{ top: '30px', left: '250px', width: '30%', height: '30%' }} src="capy.png" className='smaller-image'/>
      <h2>WingCity</h2>
      <p>A video game for women and non-binary individuals to receive mentorship on important subjects. Utilizes prompted AI for each mentor's response.</p>
      <h2>Skills Used</h2>
      <div style={{ backgroundColor: '#C3B1E1' }} className='skills'>
        <p>Unity</p>
        <p>OpenAI</p>
        <p>C#</p>
      </div>
      <img style={{ width: '30%', height: '30%' }} src="capy.png" className='hidden-image'/>
      <div className="hidden-title">WingCity</div>
      <div className="hidden-info">Find out more about the project by clicking the links below!</div>
      <a href="https://github.com/GabriellaRSmith/Wing_City"className="hidden-link">GitHub</a>
      <a href="https://www.youtube.com/watch?v=tEypsP6nifs"className="hidden-link">Demo</a>
    </div>,
    <div className={`card-content ${hiddenCards[3] ? 'hidden' : ''}`} onClick={() => handleCardClick(3)}>
      <img src="MM.png" alt="Card 4" />
      <img style={{ top: '30px', left: '250px', width: '25%', height: '25%' }} src="happy.png" className='smaller-image'/>
      <h2>Money Monster</h2>
      <p>Money Monster is an application for young adults to learn how to properly budget. However, what sets Money Monster apart is the character monster given to each account that changes based on progress. The gamification element is intended to keep users interested and interact more with the application which leads to a greater understanding of budgeting.</p>
      <h2>Skills Used</h2>
      <div style={{ backgroundColor: '#b4debf' }} className='skills'>
        <p>React</p>
        <p>SQL</p>
        <p>Node.js</p>
        <p>Leadership</p>
        <p>Adobe Illustrator</p>
      </div>
      <img style={{ width: '25%', height: '25%' }} src="happy.png" className='hidden-image'/>
      <div className="hidden-title">Money Monster</div>
      <div className="hidden-info">Find out more about the project by clicking the links below!</div>
      <a href="https://github.com/wilfredogao/Money-Monster"className="hidden-link">GitHub</a>
      <a href="https://youtu.be/33FprBo09EM"className="hidden-link">Demo</a>
    </div>,
    <div className={`card-content ${hiddenCards[4] ? 'hidden' : ''}`} onClick={() => handleCardClick(4)}>
    <img src="VR.png" alt="Card 6" />
    <img style={{ top: '30px', left: '300px', width: '20%', height: '20%' }} src="gearHeart.png" className='smaller-image'/>
    <h2>Diabetes VR</h2>
    <p>Collaborated on the Diabetes VR Team helping create objects in a 3D game for newly diagnosed children with diabetes to 
    properly read nutrition labels and learn about sugars in food.</p>
    <h2>Skills Used</h2>
    <div className='skills'>
      <p>Unity</p>
      <p>C#</p>
      <p>Blender</p>
    </div>
    <img style={{ width: '20%', height: '20%' }} src="gearHeart.png" className='hidden-image'/>
    <div className="hidden-title">Diabetes VR</div>
    <div className="hidden-info">Find out more about the project and Dream Team Engineering by clicking the link below!</div>
    <a href="https://www.dreamteameng.org/software"className="hidden-link">Dream Team Engineering Website</a>
  </div>,
    <div className={`card-content ${hiddenCards[5] ? 'hidden' : ''}`} onClick={() => handleCardClick(5)}>
      <img src="MLA.jpg" alt="Card 5" />
      <img style={{ top: '30px', left: '300px', width: '20%', height: '20%' }} src="paint.png" className='smaller-image'/>
      <h2>Marietta Local Art</h2>
      <p>A web application to help local artists connect with patrons in the Marietta, Georgia area.</p>
      <h2>Skills Used</h2>
      <div style={{ backgroundColor: '#b4debf' }} className='skills'>
        <p>HTML</p>
        <p>JavaScript</p>
        <p>CSS</p>
      </div>
      <img style={{ width: '20%', height: '20%' }} src="paint.png" className='hidden-image'/>
      <div className="hidden-title">Marietta Local Art</div>
      <div className="hidden-info">Find out more about the project by clicking the links below!</div>
      <a href="https://github.com/GabriellaRSmith/Marietta-Art-Scene"className="hidden-link">GitHub</a>
      <a href="https://www.youtube.com/watch?v=I6_-qyz0Apw"className="hidden-link">Demo</a>
    </div>,
    
  ];

  useEffect(() => {
    const handleProjectsClick = (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const top = document.getElementById('aUP');
    if (top) {
      top.addEventListener('click', handleProjectsClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (top) {
        top.removeEventListener('click', handleProjectsClick);
      }
    };
  }, []);

  return (
    <div className={`${darkMode ? 'dark-mode' : ''}`}>
      <Navbar darkMode={darkMode} onDarkModeToggle={handleDarkModeToggle}/>
      <div className="home">
      <img
          className='headshot'
          src={darkMode ? 'dark.png' : 'headshot.png'}
          alt='Headshot'
        />
        <div className='projects'>
          <h1 className='project-title'>Some of My Favorite Projects</h1>
          <Carousel cards={cards} />
        </div>
      </div>
      <div id="about" className="about-section">
        <div className='info'>
          <div className='aboutMe'>
            <h1>Who is Gabriella Smith?</h1>
            <h3>Hello! I'm a rising Junior studying Computer Science at the University of Florida (Go Gators!🐊). I’m also pursuing a Digital Arts and Sciences minor and starting an AI certificate.</h3>
            <h3>MMy programming journey began in high school when I took an AP Computer Science class, combining my interests in science and math. I immediately fell in love with software's endless possibilities to solve real-world problems. Since then, I have embraced every programming opportunity to hone my skills and grow as a leader. I thrive working with others to conquer obstacles and leading teams to make a difference.</h3>
            <h3>I thrive working with others to conquer obstacles and leading teams to make a difference. At the University of Florida, I hold several roles:</h3>
            <h2 className='confetti-hover'>- Director of Software for Dream Team Engineering</h2>
            <h2 className='confetti-hover'>- Webmaster for Engineering Ambassadors</h2>
            <h2 className='confetti-hover'>- HIV PrEP Project Researcher in the Virtual Environments Research Group</h2>
            <h2 className='confetti-hover'>- 2024-2025 Herbert Wertheim College of Engineering University Scholar</h2>
            <h2 className='confetti-hover'>- Academic Chair for the Gamma Phi Beta Sorority</h2>
            <h2 className='confetti-hover'>- Engineering Peer Advisor</h2>
            <h3>Through my university experience, I have developed a strong interest in software development and human-computer interaction. I love the creative process of designing applications and finding practical solutions to everyday problems. I am a hardworking, quick, independent, and a resourceful learner who ensures every project is completed to the highest standard.</h3>
            <h3>Currently, I am studying abroad in Kyoto, Japan, for the 2024 summer, learning how to implement cross-cultural design principles and performant programming into my future projects. For next summer, I am actively seeking an internship where I can continue to grow as an engineer.</h3>
          </div>
          <img className='fun' src={darkMode ? 'dark2.jpg' : 'fun.jpg'}/>

        </div>
        
      </div>
      <div className='stillHere'>
        <h4>"You're still here? It's over. Go home." - Ferris Bueller</h4>
        <FontAwesomeIcon icon={faArrowUp} size="2x" className='i' id='aUP'/>
      </div>
    </div>
  );
}

function Navbar({ darkMode, onDarkModeToggle }) {
  useEffect(() => {
    const handleProjectsClick = (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const projectsLink = document.querySelector('.navbar-link-projects');
    if (projectsLink) {
      projectsLink.addEventListener('click', handleProjectsClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (projectsLink) {
        projectsLink.removeEventListener('click', handleProjectsClick);
      }
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">GS</span>
      </div>
      <div className="navbar-right">
        <a href="#projects" className="navbar-link navbar-link-projects">Projects</a>
        <a href="#about" className="navbar-link">About</a>
        <a href="Resume.pdf" className="navbar-link">Resume</a>
        <a href="https://github.com/GabriellaRSmith">
          <FontAwesomeIcon icon={faGithub} size="2x" className='i' />
        </a>
        <a href="https://www.linkedin.com/in/gabriella-rose-smith/">
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" className='i' />
        </a>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} size="2x" className='special' onClick={onDarkModeToggle}/>
      </div>
    </nav>
  );
}

export default App;