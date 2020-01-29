import React, { PureComponent } from 'react'
import OrangeComponent from './OrangeComponent'
import GreenComponent from './GreenComponent'

export default class Parent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Name',
      lastname: 'Lastname'
    }
    
  }

  handleUsername = event => {
    this.setState({ username: event.target.value })
  }

  handleLastname = event => {
    this.setState({ lastname: event.target.value })
  }

  render() {
    return (
      <div>
        <OrangeComponent username = {this.state.username} onChange={this.handleUsername}/>
        <GreenComponent lastname = {this.state.lastname} onChange={this.handleLastname}/>
      </div>
    )
  }
}
