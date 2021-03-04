import React from 'react'
import './Faq.css'
import SingleQuestion from './SingleQuestion';

function Faq() {
    const ques = [0,1,2,3];
    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            <div className="faqs">
                {ques.map((quesno,key) =>{
                  return <SingleQuestion questionNo={quesno} key={key}/>
                })}
            </div>
            <button>More info</button>
        </div>
    )
}

export default Faq
