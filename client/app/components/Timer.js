import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'

class Timer extends Component {

  getPlaceholderValue() {
    return "00:00"
  }
  receivingInput(e) {
    console.log("Receiving input...")
    // Sanitize for numeric inputs only
    if(e.charCode < 48 || e.charCode > 57)
      e.preventDefault();
    // Keep the colon at the right place
    if(e.target.value.length >= 2) {
      var value = e.target.value.replace(":", "")
      value = value.substring(0, value.length - 1) + ":" + value.substring(value.length - 1, value.length)
      e.target.value = value
    }
  }

  render() {
    return (
      <div className="Timer">
        <input
          onKeyPress={(e) => this.receivingInput(e)}
          placeholder={this.getPlaceholderValue()}
          />
      </div>
    ) 
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, ActionCreators)(Timer)
