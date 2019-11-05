import React, { Component } from 'react';

export default class RecursiveComponent extends Component {

  renderRecursively(compsArray) {
    if (compsArray.length === 0) return 
    const Component = compsArray[0]
    compsArray.shift()
    return <Component>{this.renderRecursively(compsArray)}</Component>
  }

  render() {
    const { components } = this.props
    return (
      <div>
        {this.renderRecursively(components)}
      </div>
    );
  }
};
