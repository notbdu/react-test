import React, { Component } from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';

import { FRAMERATE } from './constants';

import './App.css';

class MyRect extends React.Component {
  state = {
    color: 'green',
    x: 0,
    y: 0,
  };

  componentDidMount = () => {
    setInterval(() => this.setState({
      x: this.state.x+1,
      y: this.state.y+1,
    }), FRAMERATE)
  }

  handleClick = () => {
    // window.Konva is a global variable for Konva framework namespace
    this.setState({
      color: window.Konva.Util.getRandomColor()
    });
  }

  render() {
    return (
      <Rect
        x={this.state.x}
        y={this.state.y}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="score">
          Scorebox
        </div>
        <div className="container">
          <div className="item">
            <Stage width={700} height={700}>
              <Layer>
                <MyRect />
              </Layer>
            </Stage>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
