import React from 'react';

import { Section, Paragraph } from './app.style';

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
      <Section>
        <Paragraph>
          {product.name}
          Look at my buttons, they are amazing buttons !
        </Paragraph>
      </Section>
    );
  }
}
