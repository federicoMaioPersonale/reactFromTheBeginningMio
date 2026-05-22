import React from 'react';

// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/react-fontawesome

function QuizBar(props){
    return(
        <div className="quiz-bar">
            <h1>Choose your study type</h1>
            <ul className='nav nav-pills nav-fill'>
                <li className='col-sm-3 text-center'></li>
                <div className='nav-card'>
                    Random
                </div>
            </ul>
        </div>
    )
}

export default QuizBar;