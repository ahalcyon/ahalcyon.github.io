import * as React from "react";

interface SquareProps {
  value: number;
}
interface SquareState {
    value: number | null;
}

class Square extends React.Component<SquareProps,SquareState> {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

export default Square