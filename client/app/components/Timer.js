import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'

class Timer extends Component {

  getPlaceholderValue() {
    return "00:00"
  }

  sanitizeInput(e) {
    // Allow only numeric or backspace input 4 digits long
    if((e.charCode < 48 || e.charCode > 57) ||
      e.target.value.length > 4)
      e.preventDefault()
  }

  formatTime(e) {
    var newTime = e.target.value.replace(":", "")
    // Keep the colon at the right place
    if(newTime.length > 2) {
      newTime = newTime.substring(0, newTime.length - 2) + ":" + newTime.substring(newTime.length - 2, newTime.length)
    }
    e.target.value = newTime
  }

  render() {
    return (
      <div className="Timer">
        <input
          onKeyPress={(e) => this.sanitizeInput(e)}
          onChange={(e) => this.formatTime(e)}
          placeholder={this.getPlaceholderValue()} />
      </div>
    ) 
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, ActionCreators)(Timer)
