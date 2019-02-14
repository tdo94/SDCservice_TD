/* eslint-env browser */
/* eslint-disable import/extensions */
import React from 'react';
import Axios from 'axios';

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

  componentDidMount() {
    const id = document.URL.split('/')[document.URL.split('/').length - 1];
    const product = JSON.parse(localStorage.getItem(id));
    if (product !== null) {
      this.setState({
        product,
      });
    } else {
      Axios.get(`http://localhost:3001/api/products/${id}`)
        .then(({ data }) => {
          localStorage.setItem(id, JSON.stringify(data));
          this.setState({
            product: data,
          });
        });
    }
  }

  render() {
    const { product } = this.state;
    return (
      <ColContainer>
        <CategoryBreadcrumb
          category={product.category}
        />
        <RowContainer>
          <Gallery />
          <Summary
            product={product}
          />
        </RowContainer>
      </ColContainer>
    );
  }
}
