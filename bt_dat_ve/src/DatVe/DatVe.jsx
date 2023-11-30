import React, { Component } from 'react'
import Confirmation from './Confirmation/Confirmation'
import Header from './Header/Header'
import Seats from './Seats/Seats'

export default class DatVe extends Component {
  render() {
    return (
        <div className="bg-black h-screen">
            <Header></Header>
            <div className="container flex  ">
                <div className='m-auto'><Seats></Seats></div>
                <div className='text-center m-auto'><Confirmation></Confirmation></div>
                
            </div>
        </div>
    )
  }
}
