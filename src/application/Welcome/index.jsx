import React, { Component } from 'react'
import img from './images/welcome.PNG'


export default class Welcome extends Component {
  render() {
    return (
      <div>
          <img width="100%" height="100%"src={img} alt=''/>
          <h2> Welcome to MyRoom</h2>
      </div>
    )
  }
}
