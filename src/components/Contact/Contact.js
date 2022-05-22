import React, { useState, useRef } from 'react'
import './Contact.css'
import Connect from '../../assets/contact-img.svg'
import emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [status, setStatus] = useState('Send Message');
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFields = Object.values(formData).filter(value => value === '');

        if (emptyFields.length > 0) {
            return toast.error('Please fill all the fields');
        }

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then((res) => {
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
                setStatus('Message Sent');
                return toast.success('Message sent');
            }, (err) => {
                console.log(err);
                setStatus('Send Message');
                return toast.error('Message not sent. Try again.')
            });
    }

    return (
        <section className='contact-section sections' id='contact'>
            <ToastContainer position='bottom-center' autoClose={5000} limit={1}/>
            <h2>Contact</h2>
            <h3>Send me a message &#128172;</h3>
            <div className='contact-form'>
                <div>
                    <p>Let's Talk</p>
                    <img src={Connect} alt="Personal text" />
                </div>
                <form ref={form} onSubmit={handleSubmit}>
                    <label htmlFor="contact-name">Name:
                        <input type="text" id='name' name='name' placeholder='e.g. John Doe' onChange={handleChange}/>
                    </label>
                    <label htmlFor="contact-email">E-mail:
                        <input type="text" id='email' name='email' placeholder='e.g. johndoe@service.com' onChange={handleChange}/>
                    </label>
                    <label htmlFor="contact-name">Message:
                        <textarea id="message" cols="30" rows="10" name='message' placeholder='Start typing...' onChange={handleChange}></textarea>
                    </label>
                    <input type="submit" value={status}/>
                </form>
            </div>
        </section>
    )
}

export default Contact
