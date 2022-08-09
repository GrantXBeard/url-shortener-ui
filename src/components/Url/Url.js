import React, { Component } from 'react'
import './Url.css'


class Url extends Component {
    constructor({ id, title, short, long }) {
        super() 
        this.state = {
            id: id,
            title: title,
            short: short,
            long: long,
        }
    }

    render() {
    return (
        <div className="url" id={this.state.id}>
        <h3>{this.state.title}</h3>
        <a href={this.state.short} target="blank">{this.state.short}</a>
        <p>{this.state.long}</p>
      </div>
    )
    }
}

export default Url





