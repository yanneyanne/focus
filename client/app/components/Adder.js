import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'

class Adder extends Component {
  
  onInput(field) {
    this.props.addItem(this.refs.input.value)
    this.refs.input.value = ""
  }

  render() {
    return (
      <div className = "Adder">
        <input
          ref = "input"
          onKeyPress = {(e) => {
            (e.key === 'Enter' ? this.onInput(this.refs.input) : null)
          }}
          disabled = {this.props.blockerActive} />
        <button 
          onClick = {() => this.onInput(this.refs.input)}
          disabled = {this.props.blockerActive}>
          Add
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    blockerActive: state.block.get('blockerActive')
  }
}

export default connect(mapStateToProps, ActionCreators)(Adder)
