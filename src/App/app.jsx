import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        name: 'test',
      },
    };
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1>{product.name}</h1>
      </div>
    );
  }
}
