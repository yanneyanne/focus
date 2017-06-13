import React, { Component } from 'react'
import BlockList from './BlockList'
import Timer from './Timer'
import ButtonRow from './ButtonRow'
import { List } from 'immutable'


export default class App extends Component {
  render() {
    return (
      <div>
        <BlockList />
        <Timer />
        <ButtonRow />
      </div>
    )
  }
}
