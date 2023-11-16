import React, { Component } from "react";
import "./style.css";
import { glassesData } from "./data";

export default class Glasses extends Component {
  state = {
    item: null,
  };
  renderGlasses = () => {
    return glassesData.map((item) => {
      return (
        <div className="glass-selection p-3 col-4">
          <img
            src={item.url}
            className="glass"
            onClick={() => {
              this.setState({
                item: item,
              });
              this.renderModelGlass(this.state.item);
              this.renderGlassInfo(this.state.item);
            }}
          ></img>
        </div>
      );
    });
  };

  renderModelGlass = (item) => {
    if (item !== null && item.url !== null) {
      return <img className="model-glass" src={item.url}></img>;
    }
  };

  renderGlassInfo = (item) => {
    if (item !== null && item.desc !== null) {
      return <div className="glass-info">{item.desc}</div>;
    }
  };

  render() {
    return (
      <div className="bg-container ">
        <div className="container">
          <div className="model-wrapper">
            <img src="./glassesImage/model.jpg" className="model-img"></img>
            {this.renderModelGlass(this.state.item)}
            {this.renderGlassInfo(this.state.item)}
          </div>
        </div>
        <div className="row list-glasses container">{this.renderGlasses()}</div>
      </div>
    );
  }
}
