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
      <div className="Adder">
        <div className="listElement">
          <input ref="input"
            onKeyPress={(e) => {(e.key === 'Enter' ? this.onInput(this.refs.input) : null)}}>
          </input>
          <button onClick={() => this.onInput(this.refs.input)}>
            Add
          </button>
        </div> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, ActionCreators)(Adder)
