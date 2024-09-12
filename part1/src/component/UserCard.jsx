import React from 'react'

function UserCard(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.email}</h1>
            <h1>{props.avatar}</h1>
        </div>
    )
}

export default UserCard