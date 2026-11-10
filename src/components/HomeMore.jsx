import React from 'react'
import ButLetsWork from './ButLetsWork'


const HomeMore = () => {
    return (
        <div className="homeMore">

            <section className='quote'>
                <h1>“<accent>Talented</accent>,< br className='phoneShow' /><accent>Humble</accent> <br /> and <accent>Hungry to grow</accent>”</h1>
                <li><h4> — Pilar de la Banda <br />Digital Design Lead at Prodigioso Volcán/ Jungle</h4></li>
            </section>


            <section className="experience">
                <div className="titles"><h2>My Experience</h2><h4>Because you deserve to know who you're working with</h4></div>
                <div className="centerFrame">
                    <div className="imgFrame">
                        <img src="./extraResources/FotoPerfil.webp" alt="" />
                    </div>

                    <div className="rightSide">
                        <div className="expList">
                            <div className="expItem"><div className="titlesExp"><h3>UX / UI Designer</h3><p>Prodigioso Volcán, Madrid</p></div>
                                <div className="text">
                                    <li>Transformed wireframe screens into <b>working Figma prototypes</b>  ready to send to the client and production.</li>
                                    <li>Colaborated closely to adjust to changes needed with a team, while actively working in multiple projects at once and meeting tight deadlines</li></div>
                            </div>
                            <div className="expItem"><div className="titlesExp"><h3>Bachellors Degree in Graphic Design</h3><p>Escuela Superior de Diseño de Madrid</p></div>
                                <div className="text">
                                    <li>Finished my education in a prestigious design university in Madrid, where I became proficient with Adobe Suite Programs such as <b>Photoshop, Illustrator, InDesign </b> and <b>After Effects</b>.</li>
                                    <li>Learnt skills such as <b>Figma prototyping</b>  and Front - end programming languages. (HTML5, SASS, JS, React). I also learnt UX/ UI research strategies and tools.</li>
                                    <li>                            Designed and produced projects through all the phases, from market research, to coming up with ideas and solutions, final design, production and printing.</li>
                                </div>
                            </div>
                            <div className="expItem hide"><div className="titlesExp"><h3>VI Design Award Anfaco-Fundación Banco Sabadell</h3><p>Finalist</p></div> <div className="text">
                                <li>Designed the outer packaging for a brand focused on catering to a younger demographic and made it to the final 10 selected from over <b>300+ contestants</b>  .</li></div>
                            </div>
                        </div>
                        <div className="ctaButton">
                            < ButLetsWork />
                        </div>
                    </div>
                </div>
            </section>

            <section className="designSyst">
                <div className="titles">
                    <h2>My Design Process </h2>
                    <h4>Understand how every project gets made </h4>
                </div>
                <ul className="phases">
                    <div className="phase"><h3>1. <accent>Empathize</accent></h3><p>Conduct <b>research</b> to understand the <b>problems</b> affecting users</p>
                    </div>

                    <div className="phase phoneShow"><h3>2.  <accent>Define</accent></h3><p>Analyze insight and results to <b>clarify</b> the challenge</p>
                    </div>

                    <div className="phase"><h3>3.  <accent>Ideate</accent></h3><p>Brainstorm innovative <b>solutions</b> to the problem at hand</p>
                    </div>

                    <div className="phase phoneHide"><h3>5.  <accent>Implement</accent></h3><p>Turn those test and prototypes into functioning <b>products</b></p>
                    </div>


                    <div className="phase phoneHide"><h3>2.  <accent>Define</accent></h3><p>Analyze insight and results to <b>clarify</b> the challenge</p>
                    </div>



                    <div className="phase"><h3>4. <accent>Prototyping</accent></h3><p>Build a <b>prototype</b> while constantly testing it and refining based on <b>feedback</b></p>
                    </div>

                    <div className="phase phoneShow"><h3>5.  <accent>Implement</accent></h3><p>Turn those test and prototypes into functioning <b>products</b></p>
                    </div>
                </ul>
            </section>

        </div>
    )
}

export default HomeMore