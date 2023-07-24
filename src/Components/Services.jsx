import React from 'react'
import "./Services.css"

export default function Services() {
  return (
    <>
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My services</h2>
            <div className="serv-content">
                <div className="card">
                    <div className="box">
                        <i className="fas fa-paint-brush"></i>
                        <div className="text">Web Design</div>
                        <p>"Helping start-ups, small businesses, and agencies to achieve high quality website and exceptional user exprience."</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-chart-line"></i>
                        <div className="text">Digital Marketing</div>
                        <p>It's Your time to grow through digital marketing professional services that help market advertise your business online, like search, social media and paid channels</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <i className="fas fa-code"></i>
                        <div className="text">Apps Design</div>
                        <p>"Helping start-ups, small businesses, and agencies to achieve high quality Apps and exceptional user exprience."</p>
                    </div>
                </div>
               </div>
            </div>
    </section>
    </>
  )
}
