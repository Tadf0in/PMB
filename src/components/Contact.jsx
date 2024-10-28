// import React, { useState } from 'react';
import '../css/contact.css';

export default function Contact() {
    // const [name, setName] = useState("");
    // const [mail, setMail] = useState("");
    // const [subject, setSubject] = useState("");
    // const [body, setBody] = useState("");

    return <section id='contact'> 
    <h2 className='rh2'>Nous contacter</h2>
    <div className='hr'></div>
    <div className='contact-list'>
        <span><i className="fa-brands fa-instagram"></i><a href="https://www.instagram.com/polytechmontblanc">@polytechmontblanc</a></span>
        <span><i className="fa-regular fa-envelope"></i><a href="mailto:contact@polytech-montblanc.fr">contact@polytech-montblanc.fr</a></span>
    </div>

    {/* <form>
        <div class="mb-3">
            <label for="contact-name" class="form-label">Nom</label>
            <input type="email" class="form-control" id="contact-name" 
            onChange={ (e) => setSubject(e.target.value) }/>
        </div>
        <div class="mb-3">
            <label for="contact-mail" class="form-label">Adresse mail</label>
            <input type="email" class="form-control" id="contact-mail" 
            onChange={ (e) => setSubject(e.target.value) }/>
        </div>
        <div class="mb-3">
            <label for="contact-subject" class="form-label">Sujet</label>
            <input type="email" class="form-control" id="contact-subject" 
            onChange={ (e) => setSubject(e.target.value) }/>
        </div>
        <div class="mb-3">
            <label for="contact-body" class="form-label">Message</label>
            <textarea class="form-control" id="contact-body" rows="3"
            onChange={ (e) => setBody(e.target.value) }></textarea>
        </div>
    </form>
    <p className='fst-italic'>Ou contactez nous directement à <a href="mailto:contact@polytech-montblanc.fr">contact@polytech-montblanc.fr</a></p> */}    
    </section>
}
