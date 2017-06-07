import React, { Component } from 'react'
import Header from './Header'
import { BlockListContainer } from './BlockList'
import Timer from './Timer'
import ButtonRow from './ButtonRow'
import {List} from 'immutable'


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BlockListContainer  />
        <Timer />
        <ButtonRow />
      </div>
    )
  }
}
