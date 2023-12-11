import React from "react";
import { useSelector } from "react-redux";
import {
  labelPrice,
  labelTotalPrice,
  labelSeatId,
  pricePerSeat,
} from "../../constant/constant";

export default function Confirmation() {
  const cellStyle = "border border-slate-600 px-3 py-2";

  let listSeat = useSelector((state) => state.datVeSlice.listSelectedSeat);

  const getTotalPrice = () => {
    return listSeat.reduce((total, _, currentIndex) => {
      return total + currentIndex * pricePerSeat;
    }, 0);
  };

  const renderSeatSummary = () => {
    return listSeat.map((item) => {
      return (
        <tr>
          <td className={cellStyle}>{item}</td>
          <td className={cellStyle}>{pricePerSeat}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="bg-slate-600 table-auto border border-slate-500 text-white">
        <thead>
          <tr>
            <th className={cellStyle}>{labelSeatId}</th>
            <th className={cellStyle}>{labelPrice}</th>
          </tr>
        </thead>
        <tbody>
          {renderSeatSummary()}
          <tr>
            <td className={cellStyle}>{labelTotalPrice}</td>
            <td className={cellStyle}>{getTotalPrice()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
