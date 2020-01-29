import React, { PureComponent } from 'react'

export default class GreenChild extends PureComponent {
  render() {
    return (
      <div>
        <h2>{this.props.lastname}</h2>
        <input type="text" placeholder="insert lastname" onChange={this.props.onChange} />
      </div>
    )
  }
}
