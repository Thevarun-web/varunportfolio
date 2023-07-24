import React from 'react'
import "./Home.css"
export default function Home() {
  return (
    <>
    <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Barun Kumar</div>
                <div className="text-3">And I'm a <span className="typing"></span></div>
                <a href="https://www.linkedin.com/in/barun-kumar-851834225">Hire me</a>
            </div>
        </div>
        </section>
    </>
  )
}
