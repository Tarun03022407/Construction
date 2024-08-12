import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { IoIosCall } from 'react-icons/io';
import { TbArrowBigRightLines } from 'react-icons/tb';
import '../components/StyleEmailer.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Inquiry = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xdy8r85', 'template_7q09r67', form.current, 'xkAVIy-WKLKe8tbrG');
    e.target.reset();
  };

  return (
    <section id="inquiry" className='contact container section'>
      <div className="contactContainer">
        <div className="socialContacts">
          <div className="cards">
            <div className="card">
              <AiOutlineInstagram className='icon' />
              <h4>Instagram</h4>
              <span className="userName">Ideal Shelter</span>
              <a href="https://www.instagram.com/idealshelter/" className='flex' target="_blank" rel="noopener noreferrer">
                Send Message<TbArrowBigRightLines className='icon' />
              </a>
            </div>
            <div className="card">
              <AiOutlineMail className='icon' />
              <h4>E-mail & Contact</h4>
              <span className="userName">idealshelter2021@gmail.com</span>
              <a href='tel:9818015195'>
                9818015195 <IoIosCall className='icon' />
              </a>
            </div>
          </div>
        </div>
        <div className="form">
          <form action="https://formspree.io/f/mpznbyel" method="POST" className="contact-inputs" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Username" name="username" autoComplete="off" required />
            <input type="email" placeholder="Enter Email" name="email" autoComplete="off" required />
            <textarea name="message" cols="30" rows="10" required autoComplete="off" placeholder="Enter Your Message"></textarea>
            <button className='formBtn' type="submit" value="Send">Send Email</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Inquiry;
