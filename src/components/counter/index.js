import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { increase, decrease } from "../../redux/ac";

class Counter extends Component {
  render() {
    const { count, increase, decrease } = this.props;
    return (
        <div className="container">
          <h1>{count}</h1>
          <div className="container__count2">
            <button className="green" onClick={increase}>
              plus
            </button>
            <button className="red" onClick={decrease}>
              minus
            </button>
          </div>
        </div>
    );
  }
}

export default connect(
  countStore => ({
    count: countStore.counter
  }),
  { increase, decrease }
)(Counter);
