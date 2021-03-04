import React from 'react'
import Addto from './Addto'
import './Download.css'

function Download() {
    const addto = [0,1,2]
    return (
        <div className="download">
            <h1>Download the extension</h1>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            <div className="downloadon">
                {addto.map((at,key) =>{
                  return <Addto feature={at} key={key}/>
                })}
            </div>
        </div>
    )
}

export default Download
