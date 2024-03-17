import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_y3wy389', 'template_ctbix7o', form.current, {
          publicKey: 'j4b-AW17ymYi07ZkW',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div className='join' id='join'>
            <div className='left-j'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>

            <div className='right-j'>
                <form ref={form} className='email-container' onSubmit={sendEmail}>
                    <input type='email' name='user_email' placeholder='Enter Your E-mail address to join' />
                    <button className='btn btn-j'> Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join
