import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'

class BlockList extends Component {

  getListItems() {
    return this.props.listItems || []	
  }

  isAddingItem() {
    return this.props.isAddingItem
  }

  render() {
    return (
      <div className="BlockList">
        {this.getListItems().map(item =>
          <div key={item}>
            {item}
            <button onClick={() => this.props.deleteItem(item)}>
              X
            </button>
          </div>
        )}
        {this.isAddingItem() ? 
          <div className="listElement">
            <input ref="input"
              onKeyPress={(e) => {(e.key === 'Enter' ? this.props.addItem(this.refs.input.value) : null)}}>
            </input>
            <button onClick={() => this.props.toggleAdding() }>
              X
            </button>
          </div> 
          :
          <button onClick={() => this.props.toggleAdding() }>+</button>
        }
      </div>
    )	
  } 
}

function mapStateToProps(state) {
  return {
    listItems: state.list.getIn('blockees'),
    isAddingItem: state.list.get('isAddingItem')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockList)
