import React from 'react'
import "./Skill.css"

export default function Skill() {
  return (
    <>
    <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">Skills & Experiences.</div>
                    <p>Innovative, task-driven professional with few months of experience in Web design and development as a Freelancer. Skilled at writting well-designed, testable and efficient code using current best practices in Web Development. Fast learner, hard worker and team player who is proficient in an array of scripting languages.</p>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>PHP</span>
                            <span>50%</span>
                        </div>
                        <div className="line php"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
                        <div className="line mysql"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>C</span>
                            <span>90%</span>
                        </div>
                        <div class="line c"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>C++</span>
                            <span>60%</span>
                        </div>
                        <div className="line Cplus"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>SQL</span>
                            <span>70%</span>
                        </div>
                        <div className="line SQL"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>ReactJs</span>
                            <span>50%</span>
                        </div>
                        <div className="line ReactJs"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    </>
  )
}
