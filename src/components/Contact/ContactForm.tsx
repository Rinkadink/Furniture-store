import React from 'react';
import Image from 'next/image'
import './ContactStyle.css';
import Address from "../../../public/images/Address.svg";
import Phone from "../../../public/images/Phone.svg";
import WorkingTime from "../../../public/images/WorkingTime.svg";

function ContactForm() {
  return (
   <div className="container-whole">
    <div className="contact__text">
      <p className="contact__title">Get In Touch With Us</p>
      <p className="contact__desc">
        For More Information About Our Product &amp; Services. Please feel free to drop us
        an email. Our staff always be there to help you out. do not hesitate!
      </p>
    </div>
      <div className="contact__container">
        <div className="contact__info">
          <div className="contact__info__separated address">
          <Image
             src={Address} 
             alt="Address Icon" 
             style={{ width: '22px', height: '28.18px' }} 
             />
            
            <div className="img__text">
              <p>Address</p>
              <small>
                236 5th SE Avenue, New
                <br />
                York NY10000, United
                <br />
                States
              </small>
            </div>
          </div>
          <div className="contact__info__separated phone">
          <Image 
            src={Phone} alt="Phone Icon" 
            style={{ width: '22.27px', height: '22.27px' }} 
            />
        
            <div className="img__text">
              <p>Phone</p>
              <small>
                Mobile: +(84)546-6789
                <br />
                Hotline: +(84)546-6789
              </small>
            </div>
          </div>
          <div className="contact__info__separated clock">
          <Image 
            src={WorkingTime} 
            alt="Working Time Icon" 
            style={{ width: '23px', height: '23px' }} 
            />

            <div className="img__text">
              <p>Working Time</p>
              <small>
                Moday-Friday: 9:00 -
                <br />
                22:00
                <br />
                Saturday-Sunday: 9:00 -
                <br />
                21:00
              </small>
            </div>
          </div>
        </div>

        <div className="contact__form">
          <label htmlFor="name">
            <p> Your name </p>
            <input type="text" placeholder="Abc" className="contact__form__name" />
          </label>
          <label htmlFor="email">
            <p> Email address</p>
            <input type="email" placeholder="Abc@def.com" className="contact__form__email" />
          </label>
          <label htmlFor="subject">
            <p> Subject</p>
            <input type="text" placeholder="This is optional" className="contact__form__subject" />
          </label>
          <label htmlFor="message">
            <p>Message </p>
            <input
              type="text"
              placeholder="Hi! I 'd like to ask about"
              className="contact__form__message"
            />
          </label>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
