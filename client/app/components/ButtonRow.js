import React, { Component } from 'react'
import ActionCreators from '../actions'
import { connect } from 'react-redux'

class ButtonRow extends Component {
  render() {
    return (
      <div className="ButtonRow">
        <button onClick = {() => this.props.initiateBlock(this.props.time)}>Block</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    time: state.block.get('time')

  }
}

export default connect(mapStateToProps, ActionCreators)(ButtonRow)
