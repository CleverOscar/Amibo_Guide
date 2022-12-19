import React from 'react';

export default function AmiiboInfo({data}) {
    
    let card = data.map(el => <div className='my-10'>
        <p>{el.character}</p>
        <p>{el.type}</p>
        <img src={el.image} alt={el.character}/>
    </div>)

    return(
        <div>
            {card}
        </div>
    )
}