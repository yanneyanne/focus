import React, { Component } from 'react'
import ActionCreators from '../actions'
import { connect } from 'react-redux'

class ButtonRow extends Component {
  render() {
    return (
      <div className="buttonRow">
        <button disabled = {this.props.blockerActive}
          onClick = {() => this.props.initiateBlock()}>F O C U S</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    blockerActive: state.blocker.get('blockerActive')
  }
}

export default connect(mapStateToProps, ActionCreators)(ButtonRow)
