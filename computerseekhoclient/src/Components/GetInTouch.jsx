import React from 'react';
import './GetInTouch.css'
export default function GetInTouch() {
    return (
        <>
            <section className="container">
                <div>
                    <h2>Our Origin</h2>
                    <p>
                        We are a part of Upanagar Shikshan Mandal (USM), a pioneering educational trust in the western suburbs of Mumbai. 
                        Commencing in 1956, USM has blossomed into 14 educational institutes that impart quality education from primary school to Post-Graduate courses.
                    </p>
                    <h3>Reach Us At</h3>
                    <p>
                        <strong>Authorised Training Centre</strong><br />
                        5th Floor, Vidyanidhi Education Complex,<br />
                        Vidyanidhi Road, Juhu Scheme Andheri (W),<br />
                        Mumbai 400 049, India<br />
                        <strong>Mobile:</strong> 9029435311 / 9324095272 / 9987062416<br />
                        <strong>Email:</strong> <a href="mailto:training@vidyanidhi.com">training@vidyanidhi.com</a>
                    </p>
                </div>
                <div>
                    <h2>Get In Touch With Us!</h2>
                    <p>Fill out the form below:</p>
                    <form>
                        <label>
                            Name*
                            <input type="text" name="name" required />
                        </label>
                        <label>
                            Email
                            <input type="email" name="email" />
                        </label>
                        <label>
                            Messages
                            <textarea name="messages"></textarea>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8356064622367!2d72.83550441512686!3d19.113645587071792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a70f91b2f%3A0x7c13b14f4425a1e0!2sVidyanidhi%20Education%20Complex!5e0!3m2!1sen!2sin!4v1694413907598!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    );
}
