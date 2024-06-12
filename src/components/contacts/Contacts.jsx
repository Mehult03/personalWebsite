import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef()
  const [emailSent, setEmailSent] = React.useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_5hcpjvq', 'template_9yl0eyi', form.current, 'AgZfNYiYerQ5sbOKV')
    .then((result) => {
      console.log('Email sent successfully:', result);
      setEmailSent(true);
    }, (error) => {
      console.error('Failed to send email:', error);
    });
    e.target.reset()
    
  }

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container box">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>2003mehult@gmail.com</h5>
            <a href="mailto:2003mehult@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>

         {emailSent && <p>Email sent successfully!</p>}
         <input type="text" name="from_name" placeholder="Your Full Name" required />  {/* client side validation */}
         <input type="email" name='from_email' placeholder='Your Email' required /> 
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts