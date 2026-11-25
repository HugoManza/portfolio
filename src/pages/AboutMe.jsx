import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom'
import ButLetsWork from '../components/ButLetsWork'



const skills = [
  "Prototyping",
  "Wireframing",
  "User Flows",
  "Accesibility WCAG",
  "User Testing",
  "HTML5",
  "Javascript",
  "CSS",
  "Pre-Press",
  "Production",
  "Layout Design",
  "Brand Identity",
  "Marketing",
];


const AboutMe = () => {
  return (
    <div className='container'>
      <Header />
      <div className="AboutMe">
        <section className="topSection">
          <div className="centerFrame">
            <div className="leftFrame">
              <div className="textFrame">
                <h1>Who is <br /><blue>Hugo <br />Manzano</blue></h1>
                <h4>A capable designer ready to work</h4>
              </div>
              <div className="cta">
                <ButLetsWork />
              </div>
            </div>

          </div>
        </section>

        <section className="bottomSection">
          <section className='myExp'>

            <div className="titles"><h2>My Experience</h2> <h4>My profesional experience, education, awards and publications</h4> </div>
            <div className="centerFrame">
              <div className="leftSide side">
                <div className="experience"><div className="titles"><h3>UX/ UI Designer</h3> <p>Prodigioso Volcán, Madrid</p></div>
                  <ul>
                    <li>Translated low-fidelity <b>wireframes</b> into interactive, developer-ready <b>Figma prototypes</b> for client projects, adhering to WCAG accessibility standards and reusable component libraries.
                    </li>
                    <li>Collaborated with cross-functional teams to iterate on designs based on stakeholder feedback, balancing agency projects under tight delivery timelines.</li>
                    <li> <b>Built and maintained</b> reusable UI components and accessible interface patterns in Figma,
                      streamlining design-to-developer handoff and ensuring visual consistency across deliverables</li>
                  </ul>
                </div>
                <div className="experience"><div className="titles"><div className="clik"><h3>Comunidad de Madrid -</h3> <a target='blank' href="https://www.educa2.madrid.org/web/revistadebates/buenas_practicas/-/visor/entreclases-donde-realmente-sucede-la-convivencia"> <h3>Published Research Article</h3></a></div><p>Research article on habits of students</p></div>
                  <ul>
                    <li> Conducted qualitative  <b>user interviews</b> and <b>field research</b> to map decision-making behaviors,
                      synthesizing findings for a published study while directing a 9 person team.</li>

                  </ul>
                </div>

              </div>
              <div className="rightSide side">
                <div className="experience"><div className="titles"><h3>Bachellors Degree in <br />Graphic Design</h3><p>Escuela Superior de Diseño de Madrid</p></div>
                  <ul>
                    <li><b>Brand Identity</b>, Editorial & Layout Design, Print Production, Motion Graphics (After Effects), 3D
                      Modeling (Blender), and <b>Digital Design</b> (Figma, HTML5, CSS/SASS, JavaScript).</li>
                    <li>Executed <b>end-to-end</b> visual communication projects from market research and concept
                      ideation through final artworking, pre-press preparation, and production.</li>

                  </ul>
                </div>
                <div className="experience"><div className="titles"> <div className="clik"><h3>VI Design Award </h3><a target='blank' href="https://drive.google.com/file/d/1UaJpEYL0v6LfnUvJMGOJW4T4_AL5DTPe/view?usp=sharing#page=4"><h3>Anfaco-Fundación Banco Sabadell</h3></a></div><p>Finalist</p></div>
                  <ul>
                    <li><b>Conceptualized and designed</b> print-ready outer packaging to modernize the client’s brand
                      identity, earning Finalist recognition between 300+ aplicants.</li>
                    <li>Developed a <b>modular packaging and visual identity system</b> modular packaging and visual identity system engineered to scale seamlessly
                      across future product lines.</li>
                  </ul>
                </div>

              </div>
            </div>

          </section>
          <section className="tools">
            <div className="title"><h2>Tools and Proficiencies</h2><h4>Understand what I bring with me</h4></div>
            <div className="programSect">
              <div className="titles">
                <h3>Programs</h3> <p>With 3+ years of experience</p>
              </div>

              <div className="programs">
                <div className="prog">
                  <img src='./extraResources/Icons/figma-logo.svg' alt="Figma logo" /><p>Figma</p>
                </div>
                <div className="prog">
                  <img src='./extraResources/Icons/adobe-illustrator-logo.svg' alt="Illustrator logo" /><p>Illustrator</p>
                </div>


                <div className="prog">
                  <img src='./extraResources/Icons/adobe-photoshop-logo.svg' alt="Photoshop logo" /><p>Photoshop</p>
                </div>
                <div className="prog">
                  <img src='./extraResources/Icons/adobe-indesign-logo.svg' alt="InDesign logo" /><p>InDesign</p>
                </div>
                <div className="prog">
                  <img src='./extraResources/Icons/github-logo-2.svg' alt="github logo" /><p>Github</p>
                </div>
                <div className="prog">
                  <img src='./extraResources/Icons/slack-logo.svg' alt="slack logo" /><p>Slack</p>
                </div>
              </div>
              <section className="bottomDiv">
                <div className="skills">
                  <div className="titles"><h3>Skills</h3><p>Developed through my career</p></div>
                  <div className="skillSet">
                    <ul className="skillTrack">
                      {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>

                    <ul className="skillTrack" aria-hidden="true">
                      {skills.map((skill, index) => (
                        <li key={`dup-${index}`}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="language">
                  <div className="titles">
                    <h3>Languages</h3><p>Professional tone</p>
                  </div>
                  <div className="leng">
                    <div className="english lang"> <h4>English - Native</h4> <p>Having lived in California for +8 years, I learned to communicate and write in English as if it was my first lenguage. With complete control over expressions and capable of handling team communication perfectly.</p></div>
                    <div className="spanish lang"><h4>Spanish - Native</h4><p>Born in Spain, I learnt Spanish in school. Later, after moving back, I continued to develop my education in a University in Madrid, using it constantly.</p></div>

                  </div>
                </div>
              </section>
            </div>
          </section>
          <div className="cta">
            <div className="button"><ButLetsWork /></div>

          </div>
        </section>

        <section className="black">
          <div className="profPro">
            <div className="titles">
              <h1>Professional Profile</h1>
              <h4>Learn who I am </h4>
            </div>
            <div className="centerFrame">
              <div className="leftSide"><img src="./extraResources/PerfilProf.webp" alt="" /></div>
              <div className="rightSide">
                <p>I’m Hugo Manzano, a Madrid based Product and Graphic Designer passionate about building visual systems. Whether that means an interactive digital product or print-ready packaging, I am here for it. With a Bachelor’s degree in Graphic Design as well as agency experience, I bridge the gap between strategic brand storytelling and functional user interfaces. <br /><br />
                  <b>What do I do</b><br />
                  In UX/UI and product design, I make wireframes and creative briefs into interactive, accessible Figma prototypes and scalable component libraries built for developer handoff.   On the visual and print side, I can craft brand identities, editorial layouts, marketing collaterals, and print ready packaging, with a strong sense for typography and color.   Across every discipline, I back creative decisions with field research to solve real problems.
                </p>
                <div className="cta">
                  <div className="button"><ButLetsWork /></div>

                </div>
              </div>
            </div>

          </div>

        </section>


      </div>





      <Footer />
    </div>
  )
}

export default AboutMe