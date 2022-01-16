import React from 'react'
import HOC from './HOC'

const UserComp2 = (props) => {
    return (
        <div style={{backgroundColor: props.style.backgroundColor,border: props.style.border,margin: props.style.margin}}>
           <h1> UserComponent2</h1>
        </div>
    )
}

export default HOC(UserComp2);