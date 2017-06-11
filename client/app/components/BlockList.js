import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'

class BlockList extends Component {
  componentWillMount() {
    this.props.fetchBlockees()
  }

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
          <div key={item.uri}>
            {item.name}
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
          </div> :
          <button onClick={() => this.props.toggleAdding() }>+</button>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listItems: state.list.get('blockees'),
    isAddingItem: state.list.get('isAddingItem')
  }
}

export default connect(mapStateToProps, ActionCreators)(BlockList)
