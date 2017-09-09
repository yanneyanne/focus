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
      <div className = "adder">
        <input
          ref = "input"
          onKeyPress = {(e) => {
            (e.key === 'Enter' ? this.onInput(this.refs.input) : null)
          }}
          disabled = {this.props.blockerActive} />
        <button 
          onClick = {() => this.onInput(this.refs.input)}
          disabled = {this.props.blockerActive}>
          <div id = "buttonText">
            +
          </div>
        </button>
        {this.props.errorActive ?
          <div className = "error">
            {this.props.errorMessage}
          </div> :
          null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    blockerActive: state.blocker.get('blockerActive'),
    errorActive: state.blockees.get('inputErrorActive'),
    errorMessage: state.blockees.get('errorMessage')
  }
}

export default connect(mapStateToProps, ActionCreators)(Adder)
