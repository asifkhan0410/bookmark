import React from 'react'
import './BookmarkIntro.css'
import hero from '../images/illustration-hero.svg'

function BookmarkIntro() {
    return (
        <div className="bookmarkintro">
            <div className="bookmarkintro__left">
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className="bookmarkintro__buttons">
                    <button className="chrome">Get it on Chrome</button>
                    <button className="firefox">Get it on Firefox</button>
                </div>
            </div>
            <img src={hero} alt="a simple bookmark manager"/>
        </div>
    )
}

export default BookmarkIntro
