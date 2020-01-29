import React, { PureComponent } from 'react'

export class OrangeChild extends PureComponent {

  render() {
    return (
      <div>
        <h2>{this.props.username}</h2>
        <input type="text" placeholder="insert username" onChange={this.props.onChange} />
      </div>
    )
  }
}

export default OrangeChild
