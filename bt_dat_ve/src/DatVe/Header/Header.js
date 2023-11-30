import React, { Component } from "react";
import { labelAppName } from "../../constant/constant";

export default class Header extends Component {
  render() {
    return (
      <div className="text-4xl text-yellow-400 font-bold container text-center mb-10 pt-5">
        {labelAppName}
      </div>
    );
  }
}
