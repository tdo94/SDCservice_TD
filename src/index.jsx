/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
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

ReactDOM.render(
  <App />,
  document.querySelector('#app'),
);
