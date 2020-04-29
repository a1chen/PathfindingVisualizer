import React, { Component } from "react";
import "./Node.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  render() {
    const { isFinish, isStart, isVisited } = this.props;
    //If the node isFinish create node-finish and node-start
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isVisited
      ? "node-visited"
      : "";
    return <div className={`node ${extraClassName}`}></div>;
  }
}

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
