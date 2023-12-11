import { labelAppName } from "../../constant/constant";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className="text-4xl text-yellow-400 font-bold container text-center mb-10 pt-5">
        {labelAppName}
      </div>
    </div>
  );
}
