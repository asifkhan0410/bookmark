import React, { useState } from 'react'
import './Features.css'
import SingleFeature from './SingleFeature'

function Features() {
    const [feature,setFeature] =useState(0);
    return (
        <div className="features">
            <h1>Features</h1>
            <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <div className='features__single'>
                <button className={feature===0?'active':''} value={feature} onClick={() => setFeature(0)}>Simple Bookmarking</button>
                <button className={feature===1?'active':''} value={feature} onClick={() => setFeature(1)}>Speedy Searching</button>
                <button className={feature===2?'active':''} value={feature} onClick={() => setFeature(2)}>Easy Sharing</button>
            </div>
            <SingleFeature feature={feature}/>            
        </div>
    )
}

export default Features
