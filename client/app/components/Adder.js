import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'

class Adder extends Component {
  
  render() {
    return (
      <div className="Adder">
        <div className="listElement">
          <input ref="input"
            onKeyPress={(e) => {(e.key === 'Enter' ? this.props.addItem(this.refs.input.value) : null)}}>
          </input>
          <button onClick={() => this.props.addItem(this.refs.input.value)}>
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
