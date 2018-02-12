import React, { Component } from 'react'

export default class extends Component {
  
  
  render() {
    const senator = this.props.person
    
    return (
      <div>
        <h4>{senator.person.firstname} {senator.person.lastname}</h4>
      </div>
    );
  }
}