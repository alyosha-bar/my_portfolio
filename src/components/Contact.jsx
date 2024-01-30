import AnimatedLetters from './AnimatedLetters';
import './contact.css';
// import './home.scss'
import { useState, useEffect, useRef } from 'react';

import  emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()


    useEffect( () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_0srb7ce',
            'template_knyn4ap',
            refForm.current,
            'KxX_-xrOYlnQedpc8'
        )
        .then( () => {
            alert('Message Sent!')
            window.location.reload(false)
        },
        () => {
            alert('Message Failed, please try again.')
        })
    }



    return ( 
        <>
            <div className="contact-page">
                <div className="contact-zone">
                    <div>
                        <h1>
                            <AnimatedLetters 
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                            letterClass={letterClass}/>
                        </h1>
                        <p className='text'>
                            I am interested in freelance opportunities, internships and part-time positions.
                            However, if you have other requests or questions, don't hesitate to contact me 
                            using the form, 
                            and I will get back to you as soon as possible.
                        </p>
                    </div>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={ sendEmail }>
                            <ul>
                                <div className='half-group'>
                                    <li className='half'>
                                        <input type="text" name='name' placeholder="Name" required/>
                                    </li>
                                    <li className='half'>
                                        <input type="email" name='email' placeholder="Email" required/>
                                    </li>
                                </div>
                                <li className=''>
                                    <input type="text" name='subject' placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="Send"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;