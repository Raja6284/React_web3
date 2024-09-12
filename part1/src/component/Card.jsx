import React from 'react'
import './Card.css'
import { useState } from 'react'


function Card(){

    const[Cards,setCard] = useState([{title:"Title: 1",owner:"Owner: 1"}])
    // const Cards = [{title:"Title 1",owner:"owner 1"},
    //             {title:"Title 1",owner:"owner 1"},
    //             {title:"Title 1",owner:"owner 1"},
    //             {title:"Title 1",owner:"owner 1"},
    //             {title:"Title 1",owner:"owner 1"}
    // ]

    const CardGenerator = ()=>{
        // Cards.push({title:"Title 1",owner:"owner 1"})
        const newObject = {title:`Title:${Cards.length+1}`,owner:`Owner: Raja ${Cards.length+1}`}
        setCard([...Cards,newObject])
        console.log("card pushed to container")
    }

    const[counter,setCounter] = useState(0)
    //let counter = 0
    
    const increment=()=>{
        //counter++;
        setCounter(counter+1)
        console.log("counter:",counter)
    }
    console.log("render")
    return(
        <>
        <button className = 'generate-btn m-2' onClick={CardGenerator}>Generate Card</button>
        <div className='card-container'>
        {
            Cards.map((Card,index)=>{
                return(
                    <div className='card'> key={index}<h3>{Card.title}<br/>{Card.owner}</h3></div>
                )
            })
         }
         
        </div>

         <div className='card-container m-4' >
            <div className='card'>
                {counter}
            </div>
            
         </div>
         <button className = 'generate-btn' onClick={increment}>Increment</button>

         
        </>
        
    )
}


export default Card