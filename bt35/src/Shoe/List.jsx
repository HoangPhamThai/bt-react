import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    let { list } = this.props
    return (
      <div className='row col-6'>
        {list.map((item) => {
      
            return <Item key={item.id} data={item}></Item>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.shoeArr
  }
}


export default connect(mapStateToProps)(List)