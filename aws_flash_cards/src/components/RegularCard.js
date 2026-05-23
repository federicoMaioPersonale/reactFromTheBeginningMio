import React from 'react'

function RegularCard(props){
    return(
         <>
            <div className='card-back'>
                <div>AWS Service</div>
            </div>
            <div className='card-front'>
                <div>Description</div>
                <div>Category</div>
            </div>
        </>
    )
}

export default RegularCard;