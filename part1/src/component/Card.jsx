import React from 'react'
import './Card.css'
function Card(){

    const Cards = [{title:"Title 1",owner:"owner 1"},
                {title:"Title 1",owner:"owner 1"},
                {title:"Title 1",owner:"owner 1"},
                {title:"Title 1",owner:"owner 1"},
                {title:"Title 1",owner:"owner 1"}
    ]

    return(
        <div className='card-container'>
           {
            Cards.map((Card)=>{
                return(
                    <div className='card'><h3>{Card.title}<br/>{Card.owner}</h3></div>
                )
            })
           }
        </div>
    )
}


export default Card