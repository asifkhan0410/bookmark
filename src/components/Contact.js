import React, { useState } from 'react'
import './Contact.css'

function Contact() {
    const [email,setEmail]= useState('');
    const [emailmsg, setEmailMsg] =useState(false)
    function checkEmail(){
        if(email!==undefined){
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                setEmailMsg(true)
            }else{
                setEmailMsg(false)
            }
        }
    }
    return (
        <div className="contact">
            <h4>35,000+ ALREADY JOINED</h4>
            <h1>Stay up-to-date with what we’re doing</h1>
            <div className="emailcontact">
                <div className={`input ${emailmsg?'wrongemail':""}`}><input value={email} type="email" placeholder="Enter your email address" onChange={(e)=> setEmail(e.target.value)}/>
                {emailmsg?<p>Whoops,make sure it's an email</p>:''}</div>
                <button onClick={checkEmail}>Contact Us</button>
            </div>
            
        </div>
    )
}

export default Contact
