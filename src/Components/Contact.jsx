import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <>
    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact me</h2>
            <div className="contact-content">
                <div className="column left">
                    <div className="text">We'd Love to Hear from You</div>
                    <p>Whether   you're   curious   about   services, features, desings, a free trial, or even press - we're ready to answer any and all questions.</p>
                    
                    
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Barun kumar</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Muzaffarpur,Bihar</div>
                            </div>
                        </div>
                        <div className="row">
                            <i className="fas fa-envelope"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">varunsingh90503@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column right">
                    <div className="text">Message me</div>
                    <form method="post" action="contactus.php">
                        <div className="fields">
                            <div className="field name">
                                
                            </div>
                            <div className="field email">
                                
                            </div>
                        </div>
                        <div className="field">
                        
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required name="message"></textarea>
                        </div>
                        <div className="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
