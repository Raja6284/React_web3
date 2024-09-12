import React from 'react'
import './Card.css'
function Card(){

    const Cards = [{title:"Title 1",owner:"owner 1"},
                {title:"Title 1",owner:"owner 1"},
                {title:"Title 1",owner:"owner 1"},
                {title:"Title 1",owner:"owner 1"},
                {title:"Title 1",owner:"owner 1"}
    ]

    const CardGenerator = ()=>{
        Cards.push({title:"Title 1",owner:"owner 1"})
        console.log("card pushed to container")
    }

    return(
        <>
        <div className='card-container'>
        {
            Cards.map((Card)=>{
                return(
                    <div className='card'><h3>{Card.title}<br/>{Card.owner}</h3></div>
                )
            })
         }
         
        </div>

        <button className = 'generate-btn' onClick={CardGenerator}>Generate Card</button>
        </>
        
    )
}


export default Card