import React, { Component } from "react";
import Node from "./Node/Node";
import "./PathfindingVisualizer.css";

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  componentDidMount() {
    //Creates vector containing each row
    const nodes = [];
    for (let row = 0; row < 20; row++) {
      //Fill each row with individual nodes
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          col,
          row,
          //If these row/col then it is a start/finish
          isStart: row === 10 && col === 5,
          isFinish: row === 10 && col === 45,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    this.setState({ nodes });
  }

  render() {
    const { nodes } = this.state;
    console.log(nodes);

    return (
      <div className="grid">
        {nodes.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { isStart, isFinish } = node;
                return (
                  <Node
                    key={nodeIdx}
                    isStart={isStart}
                    isFinish={isFinish}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
