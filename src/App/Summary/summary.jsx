import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './summary.style';

const Summary = ({ product }) => (
  <Container>
    <Title>
      <h5>{product.name}</h5>
      <p>
        by
        <span>
          {` ${product.manufacturer}`}
        </span>
      </p>
    </Title>
  </Container>
);

Summary.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    unique_id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    manufacturer: PropTypes.string,
    primary_image: PropTypes.string,
    review_one_star_count: PropTypes.number,
    review_two_star_count: PropTypes.number,
    review_three_star_count: PropTypes.number,
    review_four_star_count: PropTypes.number,
    review_five_star_count: PropTypes.number,
    review_count: PropTypes.number,
    question_count: PropTypes.number,
    price: PropTypes.number,
    total_price: PropTypes.number,
    stock: PropTypes.number,
    is_prime: PropTypes.bool,
    description: PropTypes.string,
  }),
};

Summary.defaultProps = {
  product: {
    id: 1,
    unique_id: 1,
    name: 'Amazon Product 1',
    category: 'electronics',
    manufacturer: 'Murazik and Sons',
    primary_image: 'https://s3.us-east-2.amazonaws.com/product-summary-component/electronics1.jpg',
    review_one_star_count: 624,
    review_two_star_count: 639,
    review_three_star_count: 622,
    review_four_star_count: 275,
    review_five_star_count: 251,
    review_count: 2411,
    question_count: 216,
    price: 561,
    total_price: 571,
    stock: 5,
    is_prime: true,
    description: 'string',
  },
};

export default Summary;
