import * as React from "react";
type SquareType = string | null;
interface SquareProps {
  value: SquareType;
  onClick: () => void;
}
interface SquareState {
    value: number | null;
}

class Square extends React.Component<SquareProps,SquareState> {
  constructor(props: SquareProps) {
    super(props)
    this.state = {
      value: 0
    };
  };
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square