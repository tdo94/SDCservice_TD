/* eslint-disable import/extensions */
import React from 'react';

import Summary from './Summary/summary.jsx';
import Gallery from './Gallery/gallery.jsx';
import CategoryBreadcrumb from './Category-Breadcrumb/category-breadcrumb.jsx';
import { ColContainer, RowContainer } from './app.style';

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
      <ColContainer>
        App Comp:
        {product.name}
        <CategoryBreadcrumb />
        <RowContainer>
          <Gallery />
          <Summary />
        </RowContainer>
      </ColContainer>
    );
  }
}
