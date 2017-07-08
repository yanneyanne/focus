import React, { Component } from 'react'
import ActionCreators from '../actions'
import { connect } from 'react-redux'

class ButtonRow extends Component {
  render() {
    return (
      <div className="ButtonRow">
        <button disabled = {this.props.blockerActive}
          onClick = {() => this.props.initiateBlock()}>Block</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    blockerActive: state.block.get('blockerActive')
  }
}

export default connect(mapStateToProps, ActionCreators)(ButtonRow)
