import React, { useState } from 'react'

function SingleQuestion({questionNo}) {
    const [toggle,setToggle] = useState(true)
    const ques = ['What is Bookmark?','How can I request a new browser?','Is there a mobile app?','What about other Chromium browsers?'];
    const answer = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.','Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.','Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.','Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.']
    return (
        <div className="singlequestion">
            <div className="singlequestionbody">
                <h3>{ques[questionNo]}</h3>
                <button onClick={()=> setToggle(!toggle)}>{toggle?<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" ><path fill="hsl(0, 94%, 66%)" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/></svg>}</button>
            </div>
            {!toggle?<p>{answer[questionNo]}</p>:""}            
        </div>
    )
}

export default SingleQuestion
