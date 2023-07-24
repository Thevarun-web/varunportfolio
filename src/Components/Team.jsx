import React from 'react'
import "./Team.css"

export default function Team() {
  return (
    <>
     <section className="teams" id="teams">
        <div className="max-width">
            <h2 className="title">My teams</h2>
            <div className="carousel owl-carousel">
                <div className="card">
                    <div className="box">
                
                        <div className="text">Navin Kumar</div>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box"/>
                        <div className="text">Pranav shiva</div>
                        <p>App Developer</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        
                        <div className="text">Sinod Kumar</div>
                        <p>Full Stack Web Developer</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">

                        <div className="text">Saurav Singh</div>
                        <p>Front End Developer</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box"/>
                        <div className="text">Prince</div>
                        <p>Digital Marketing Specialist</p>
                    </div>
                </div>
            
        
    </section>
    </>
  )
}
