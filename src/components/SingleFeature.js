import React, { useState } from 'react'
import tab1 from '../images/illustration-features-tab-1.svg'
import tab2 from '../images/illustration-features-tab-2.svg'
import tab3 from '../images/illustration-features-tab-3.svg'

function SingleFeature({feature}) {
    const image = [tab1, tab2, tab3];
    const heading = ['Bookmark in one click','Intelligent search','Share your bookmarks'];
    const info = ['Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.','Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.','Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'];


    return (
        <div className="singlefeature">
            <img src={image[feature]} alt="a simple bookmark manager"/>
            <div className="singlefeature__right">
                <h1>{heading[feature]}</h1>
                <p>{info[feature]}</p>                
                <button className="singlefeaturebtn">More info</button>
            </div>
        </div>
    )
}

export default SingleFeature
