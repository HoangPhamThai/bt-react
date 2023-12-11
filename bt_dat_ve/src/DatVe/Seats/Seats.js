import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { labelScreen } from "../../constant/constant";
import { chooseSeat } from "../datVeSlice";

export default function Seats() {
  const listColId = Array.from({ length: 12 }, (v, k) => k + 1);
  const listRowId = Array.from(Array(10))
    .map((v, k) => k + 65)
    .map((x) => String.fromCharCode(x));

  let dispatch = useDispatch();

  let handleChooseSeat = (seatId) => {
    dispatch(chooseSeat(seatId));
  };

  let listSeat = useSelector((state) => state.datVeSlice.listSelectedSeat);

  const renderSeats = () => {
    return (
      <div className="p-5">
        {listRowId.map((row) => {
          return (
            <div>
              {listColId.map((col) => {
                let seatId = row.concat(col);
                let cellStyle = "mr-4 mb-4 w-10 h-10 rounded-lg ";
                let id = listSeat.findIndex((item) => item === seatId);
                if (id === -1) {
                  cellStyle += "bg-green-300";
                } else {
                  cellStyle += "bg-red-300";
                }
                return (
                  <button
                    onClick={() => {
                      handleChooseSeat(seatId, () => {
                        renderSeats();
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

  return (
    <div>
      {/* screen */}
      <div className=" bg-yellow-800 w-full text-white text-2xl py-1 text-center">
        {labelScreen}
      </div>

      {/* grid seat */}
      <div className="container">{renderSeats()}</div>
    </div>
  );
}