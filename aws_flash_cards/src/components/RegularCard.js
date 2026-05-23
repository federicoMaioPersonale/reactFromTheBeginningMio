import React from 'react'

function RegularCard(props){
    console.log(props.questionData);
    const question = props.questionData;
    return(
         <>
            <div className='card-back'>
                <div>{question.service}</div>
            </div>
            <div className='card-front'>
                <div>{question.desc}</div>
                <div>{question.cat}</div>
            </div>
        </>
    )
}

export default RegularCard;