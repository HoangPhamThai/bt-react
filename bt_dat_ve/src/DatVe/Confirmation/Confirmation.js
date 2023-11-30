import React, { Component } from "react";
import { connect } from "react-redux";
import {
  labelPrice,
  labelTotalPrice,
  labelSeatId,
  pricePerSeat,
} from "../../constant/constant";

class Confirmation extends Component {

    constructor(props){
        super(props);
        this.cellStyle = "border border-slate-600 px-3 py-2"
    }

  getTotalPrice() {
    return this.props.listSeat.reduce((total, _, currentIndex) => {
        // console.log(`${total} - ${num}`)
      return total + currentIndex * pricePerSeat;
    }, 0);
  }

  renderSeatSummary = () => {
    return this.props.listSeat.map((item) => {
      return (
        <tr>
          <td className={this.cellStyle}>{item}</td>
          <td className={this.cellStyle}>{pricePerSeat}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <div></div>
        <table className="bg-slate-600 table-auto border border-slate-500 text-white">
          <thead>
            <tr>
              <th className={this.cellStyle}>{labelSeatId}</th>
              <th className={this.cellStyle}>{labelPrice}</th>
            </tr>
          </thead>
          <tbody>
            {this.renderSeatSummary()}
            <tr>
              <td className={this.cellStyle}>{labelTotalPrice}</td>
              <td className={this.cellStyle}>{this.getTotalPrice()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        listSeat: state.listSeat
    }
}

export default  connect(mapStateToProps)(Confirmation)