import React, { Component } from 'react'
import Senator from './Senator.js'
import { getDemocrats, getRepublicans } from '../filters'

export default class extends Component {
  
  renderRepublicans () {
    return getRepublicans()
      .map(senator => <Senator person={senator}/>)
  }
  
  
  render() {
    
    const republicans = this.renderRepublicans()
    
    return (
      <div>
        <h1>Republicans</h1>
        {republicans}
      </div>
    );
  }
}
//Another way to write export default class extends Component {} above
// class Senators extends Component {
//
// }

