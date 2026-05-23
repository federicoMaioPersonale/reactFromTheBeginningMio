import React from 'react';
// fonrAwesome è la componente react
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// icone
import {faDumbbell, faFont, faFileAlt,faDice} from '@fortawesome/free-solid-svg-icons';
// parte core della libreria
import {library} from'@fortawesome/fontawesome-svg-core';

library.add(faDumbbell);
library.add(faFont);
library.add(faFileAlt);
library.add(faDice);


function QuizType(props){
    return(
        <li className='col-sm-3 text-center'>
            {/* props.userChoice con funzione anonima dato che  una callback di onClick e deve risalire fino a App.js */}
            <div className='nav-card' onClick={()=>{props.userChoice(props.quizType)}}>
                <FontAwesomeIcon icon={props.icon} size="4x"/>
                <span>{props.quizType}</span>
            </div>
        </li>
    )
}

export default QuizType;