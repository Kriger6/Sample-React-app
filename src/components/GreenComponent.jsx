import React, { PureComponent } from 'react'
import GreenChild from './childComponents/GreenChild'

export class GreenComponent extends PureComponent {

  render() {


    return (
      <div>
        <h1 style={{backgroundColor: 'green'}}>
          Green Component
        </h1>
        <GreenChild lastname = {this.props.lastname} onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default GreenComponent
