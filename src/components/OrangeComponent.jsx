import React, { PureComponent } from 'react'
import OrangeChild from './childComponents/OrangeChild'

class OrangeComponent extends PureComponent {

  render() {
    return (
      <div>
        <h1 style={{backgroundColor: 'orange'}}>Orange Component</h1>
        <OrangeChild username={this.props.username} onChange={this.props.onChange} />
      </div>
    )
  }
}

export default OrangeComponent
