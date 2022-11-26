import React, { useState, useRef } from "react";
import "../styles/Contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form =useRef()
    const [getForm, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [getResponse, setResponse] = useState("")


    const onUserInput = (e) => {
        setForm({...getForm, [e.target.name]: e.target.value })
    }

    
    const onSend = () => {
        setForm({
            name: "",
            email: "",
            message: ""
        })
        setResponse("Message Submitted Successfully!")
    }


    const onHandleError = () => {
        setResponse("Sorry we had a bit of trouble submitting your message, please try again!")

    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ssiyxfq', 'template_theku2j', form.current , "K0IoWmta5ulI6j8q0")
        .then((result) => {
            onSend()
        }, (error) => {
            onHandleError()
        });
  };


    return (
        <div className="contact-page-container">
            <div>
                <h1>Get In Touch!</h1>
                <p>Please reach out if you have any questions regarding one of our products or have any issues with one of your orders.</p>
                <p>We will be happy to help!</p>
                <h2>gatherforcheese@gmail.com</h2>
            </div>
            <div>
                <h1>Send Us A Message</h1>
                <form onSubmit={sendEmail} ref={form}>
                    <label>Name</label>
                    <input type="text" name="name" value={getForm.name} onChange={onUserInput}/>
                    <label>Email</label>
                    <input type="email" name="email" value={getForm.email} onChange={onUserInput}/>
                    <label>Message</label>
                    <textarea name="message" value= {getForm.message} onChange={onUserInput}/>
                    <input type="submit" value="Send"/>
                </form>
                <div>{getResponse}</div>
            </div>
        </div>
    )
}

export default Contact;
