import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cart extends Component {
  render() {
    return (
        <div className='col-6'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Img</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.cart.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><img className="w-50" src={item.image} alt={item.name}></img></td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => {
                                        this.props.handleDelete(item.id)
                                    }}>Remove</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
      
    )
  }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (id) => {
            let action = {
                type: "deleteCartItem",
                payload: id,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)