import React, { Component } from 'react'
import { connect } from 'react-redux'

class Item extends Component {

  render() {
    return (
      <div className='col-4'>
        <img src={this.props.data.image} alt='' className='w-100'></img>
        <h4>{this.props.data.name}</h4>
        <button className='btn btn-primary' onClick={() => {
            this.props.handleAddToCart(this.props.data)
        }}>Add</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      handleAddToCart: (item) => {
        let action = {
          type: "addToCart",
          payload: item,
        }
        dispatch(action)
      }
    }
}


export default connect(null, mapDispatchToProps)(Item)