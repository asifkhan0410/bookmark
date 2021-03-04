import React from 'react'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'

function Addto({feature}) {
    const image=[chrome,firefox,opera];
    const name = ['Chrome','Firefox','Opera'];
    const version = ['62','55','46']
    return (
        <div className={`addto ${feature===0?'':feature===1? 'first': 'second'}`}>
            <img src={image[feature]} alt="a simple bookmark tool"/>
            <h3>Add to {name[feature]}</h3>
            <p>Minimum version {version[feature]}</p>
            <button>Add & Install Extension</button>            
        </div>
    )
}

export default Addto
