import React, { Component } from "react"

const HOC = Component => class extends React.Component {

    constructor() {
        super();
        this.state = {
            name : 'mark',
            style : {
                backgroundColor : 'green',
                border : '1px solid red',
                padding : '10px',
                margin : '100px'
            }
        }
    }

    render(){
        return(
            <Component {... this.state} />
        );
    }
}

export default HOC 