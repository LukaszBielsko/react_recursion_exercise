import React, { Component } from 'react';
import RecursiveComponent from './RecursiveComponent.jsx';

const One = class One extends Component {
  render() {
    return <div className="box">One {this.props.children}</div>
  }
}

const Two = class Two extends Component {
  render() {
    return <div className="box">Two {this.props.children}</div>
  }
}

const Three = class Three extends Component {
  render() {
    return <div className="box">Three {this.props.children}</div>
  }
}

const components = [One, Two, Three];

export default class Recursion extends Component {
  render() {
    return (
      <div className='App-wrapper'>
        <RecursiveComponent components={components} />
      </div>
    );
  }
};
