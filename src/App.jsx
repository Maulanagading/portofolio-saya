import React from 'react';
import SplashScreen from './components/SplashScreen';
import StaggeredMenu from './components/StaggeredMenu';
import './index.css';

const menuItems = [
  { label: 'About', ariaLabel: 'About Me', link: '#about' },
  { label: 'Experience', ariaLabel: 'My Experience', link: '#experience' },
  { label: 'Projects', ariaLabel: 'My Projects', link: '#projects' },
  { label: 'Contact', ariaLabel: 'Contact Me', link: '#contact' }
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'GitHub', link: 'https://github.com' }
];

function App() {
  return (
    <>
      {/* Memanggil file komponen eksternal */}
      <SplashScreen />
      <StaggeredMenu 
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#000"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B497CF', '#5227FF']}
        logoUrl=""
        accentColor="#5227FF"
        isFixed={true}
      />

      <main>
        <section id="profile">
          <div className="section__pic-container">
            <img src="/assets/fotofoto.png" alt="Maulana Gading K.P profile picture" />
          </div>
          <div className="section__text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Maulana Gading K.P</h1>
            <p className="section__text__p2">IT Enthusiast</p>
            <div className="btn-container">
              <button className="btn btn-color-2" onClick={() => window.open('/assets/resume-example.pdf')}>
                Download CV
              </button>
              <button className="btn btn-color-1" onClick={() => window.location.hash = 'contact'}>
                Contact Info
              </button>
            </div>
            <div id="socials-container">
              <img src="/assets/linkedin.png" alt="My LinkedIn profile" className="icon" onClick={() => window.open('https://linkedin.com/', '_blank')} />
              <img src="/assets/github.png" alt="My Github profile" className="icon" onClick={() => window.open('https://github.com/', '_blank')} />
            </div>
          </div>
        </section>

        <section id="about">
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="section__pic-container">
              <img src="/assets/about-pic.png" alt="Profile picture" className="about-pic" />
            </div>
            <div className="about-details-container">
              <div className="about-containers">
                <div className="details-container">
                  <img src="/assets/experience.png" alt="Experience icon" className="icon" />
                  <h3>Experience</h3>
                  <p>Front end developer <br /> PHOTOGRAPHER</p>
                </div>
                <div className="details-container">
                  <img src="/assets/education.png" alt="Education icon" className="icon" />
                  <h3>Education</h3>
                  <p>4th-semester computer science student</p>
                </div>
              </div>
              <div className="text-container">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
                  reprehenderit et laborum, rem, dolore eum quod voluptate
                  exercitationem nobis, nihil esse debitis maxime facere minus sint
                  delectus velit in eos quo officiis explicabo deleniti dignissimos.
                  Eligendi illum libero dolorum cum laboriosam corrupti quidem,
                  reiciendis ea magnam? Nulla, impedit fuga!
                </p>
              </div>
            </div>
          </div>
          <img src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.hash = 'experience'} />
        </section>

        <section id="experience">
          <p className="section__text__p1">Explore My</p>
          <h1 className="title">Experience</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container">
                <h2 className="experience-sub-title">Frontend Development</h2>
                <div className="article-container">
                  <article>
                    <img src="/assets/checkmark.png" alt="Icon" className="icon" />
                    <div>
                      <h3>HTML</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src="/assets/checkmark.png" alt="Icon" className="icon" />
                    <div>
                      <h3>CSS</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src="/assets/checkmark.png" alt="Icon" className="icon" />
                    <div>
                      <h3>JavaScript</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="details-container">
                <h2 className="experience-sub-title">Creative Media</h2>
                <div className="article-container">
                  <article>
                    <img src="/assets/checkmark.png" alt="Icon" className="icon" />
                    <div>
                      <h3>Photography</h3>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <img src="/assets/checkmark.png" alt="Icon" className="icon" />
                    <div>
                      <h3>Videography</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                  <article>
                    <img src="/assets/checkmark.png" alt="Icon" className="icon" />
                    <div>
                      <h3>Storytelling</h3>
                      <p>Basic</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.hash = 'projects'} />
        </section>

        <section id="projects">
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <div className="experience-details-container">
            <div className="about-containers">
              <div className="details-container color-container">
                <div className="article-container">
                  <img src="/assets/project-1.png" alt="Project 1" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">Project One</h2>
                <div className="btn-container">
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank')}>
                    Github
                  </button>
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank')}>
                    Live Demo
                  </button>
                </div>
              </div>
              <div className="details-container color-container">
                <div className="article-container">
                  <img src="/assets/project-2.png" alt="Project 2" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">Project Two</h2>
                <div className="btn-container">
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank')}>
                    Github
                  </button>
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank')}>
                    Live Demo
                  </button>
                </div>
              </div>
              <div className="details-container color-container">
                <div className="article-container">
                  <img src="/assets/project-3.png" alt="Project 3" className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">Project Three</h2>
                <div className="btn-container">
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank')}>
                    Github
                  </button>
                  <button className="btn btn-color-2 project-btn" onClick={() => window.open('https://github.com/', '_blank')}>
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.hash = 'contact'} />
        </section>

        <section id="contact">
          <p className="section__text__p1">Get in Touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img src="/assets/email.png" alt="Email icon" className="icon contact-icon email-icon" />
              <p><a href="mailto:examplemail@gmail.com">Example@gmail.com</a></p>
            </div>
            <div className="contact-info-container">
              <img src="/assets/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
              <p><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2026 Maulana Gading K.P. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;