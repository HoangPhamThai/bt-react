import React, { Component } from "react";
import { connect } from "react-redux";
import { actionChooseSeat, labelScreen } from "../../constant/constant";

class Seats extends Component {
  constructor(props) {
    super(props);
    this.listColId = Array.from({ length: 12 }, (v, k) => k + 1);
    this.listRowId = Array.from(Array(10))
      .map((v, k) => k + 65)
      .map((x) => String.fromCharCode(x));

    this.seatGrid = "";
  }

  renderSeats = () => {
    return (
      <div className="p-5">
        {this.listRowId.map((row) => {
          return (
            <div>
              {this.listColId.map((col) => {
                let seatId = row.concat(col);
                let cellStyle = "mr-4 mb-4 w-10 h-10 rounded-lg ";
                let id = this.props.listSeat.findIndex(
                  (item) => item === seatId
                );
                if (id === -1) {
                  cellStyle += "bg-green-300";
                } else {
                  cellStyle += "bg-red-300";
                }
                return (
                  <button
                    onClick={() => {
                      this.props.handleChooseSeat(seatId, () => {
                        this.render();
                      });
                    }}
                    className={cellStyle}
                    key={seatId}
                  >
                    {seatId}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        {/* screen */}
        <div className=" bg-yellow-800 w-full text-white text-2xl py-1 text-center">
          {labelScreen}
        </div>

        {/* grid seat */}
        <div className="container">{this.renderSeats()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listSeat: state.listSeat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChooseSeat: (seatId, callback) => {
      callback();
      dispatch({ type: actionChooseSeat, payload: seatId });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
