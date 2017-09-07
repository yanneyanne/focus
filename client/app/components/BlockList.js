import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/'

class BlockList extends Component {
  componentWillMount() {
    this.props.loadBlockees()
  }

  getListItems() {
    return this.props.listItems || []
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listItems: state.blockees.get('blockees')
  }
}

export default connect(mapStateToProps, ActionCreators)(BlockList)
