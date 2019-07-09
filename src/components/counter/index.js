import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
import { increase, decrease } from "../../redux/ac";
import { Button } from "react-bulma-components/full";

class Counter extends Component {
  render() {
    const { count, increase, decrease } = this.props;
    return (
        <div className="container">
          <h1>{count}</h1>
          <div className="container__count2">
            <Button size="large" color="success" className="green" onClick={increase}>
              plus
            </Button>
            <Button size="large" color="danger" className="red" onClick={decrease}>
              minus
            </Button>
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
