import React from 'react';

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