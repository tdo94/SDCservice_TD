import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  Stats,
  Price,
  Description,
  Links,
} from './summary.style';

const Summary = ({ product }) => {
  const priceStrikeThrough = <span className="strikeThrough">{`$${product.price - 0.01}`}</span>;
  const newDescriptionArr = [];
  let newDescription;
  if (product.description) {
    newDescription = product.description
      .replace('\n', '')
      .split('.');
    for (let i = 0; i < newDescription.length; i += 1) {
      newDescription[i] = newDescription[i].replace(/^\s+|\s+$/g, '');
      if (newDescription[i] !== '') {
        newDescriptionArr.push(<li key={i}><span>{newDescription[i]}</span></li>);
      }
    }
  }
  return (
    <Container>
      <Title>
        <h5>{product.name}</h5>
        <p>
          by
          <a href="?">
            {` ${product.manufacturer}`}
          </a>
        </p>
      </Title>
      <Stats>
        <div className="stars">
          <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/fullStar.png" alt="amazon-star" />
          <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/fullStar.png" alt="amazon-star" />
          <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/fullStar.png" alt="amazon-star" />
          <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/fullStar.png" alt="amazon-star" />
          <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/fullStar.png" alt="amazon-star" />
          <img className="carrot" src="https://s3.us-east-2.amazonaws.com/product-summary-component/downCarrot.png" alt="material carrot" />
        </div>
        <a className="reviews" href="?">{`${product.review_count} customer reviews`}</a>
        <span> | </span>
        <a className="questions" href="?">{`${product.question_count} answered questions`}</a>
      </Stats>
      <Price>
        <div className="price">
          <p>
            Price:
          </p>
          <span className="priceNum">{` $${product.price - 0.01}`}</span>
          {product.is_prime ? <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/primeLogo.png" alt="prime Logo" /> : ''}
        </div>
        <div className="discoverBonus">
          <p>
            {'Pay '}
            { priceStrikeThrough }
            {` ${product.price - 10.01} after using available Discover Cashback Bonus®.`}
          </p>
        </div>
      </Price>
      <Description>
        {newDescriptionArr}
      </Description>
      <Links>
        <a href="#top">
          <strong>New</strong>
          {` (1) from $${product.price - 0.01}`}
        </a>
        {product.is_prime ? <img src="https://s3.us-east-2.amazonaws.com/product-summary-component/primeLogo.png" alt="prime Logo" /> : ''}
      </Links>
      <Links>
        <a href="#top">
          Report incorrect product information.
        </a>
      </Links>
    </Container>
  );
};

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
