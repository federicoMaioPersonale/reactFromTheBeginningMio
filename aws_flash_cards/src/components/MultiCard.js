import React from 'react'

function MultiCard(props){
    return(
        <>
            <div className='card-back'>
                <div>AWS Service</div>
                <ul className='multi'>
                    options
                </ul>
            </div>
            <div className='card-front'>
                Multi-Choice answer
            </div>
        </>
    )
}

export default MultiCard;