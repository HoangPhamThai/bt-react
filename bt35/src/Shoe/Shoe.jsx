import React, { Component } from 'react'
import Cart from './Cart'
import List from './List'

export default class Shoe extends Component {
  render() {
    return (
      <div className='row'>
        <Cart></Cart>
        <List></List>
      </div>
    )
  }
}