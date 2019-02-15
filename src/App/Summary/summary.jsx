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
  const newDescription = product.description
    .replace('\n', '')
    .split('.');
  for (let i = 0; i < newDescription.length; i += 1) {
    newDescription[i] = newDescription[i].replace(/^\s+|\s+$/g, '');
    if (newDescription[i] !== '') {
      newDescriptionArr.push(<li key={i}><span>{newDescription[i]}</span></li>);
    }
  }
  return (
    <Container id="summaryCont">
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
            {` $${product.price - 10.01} after using available Discover Cashback Bonus®.`}
          </p>
        </div>
      </Price>
      <Description>
        {newDescriptionArr}
      </Description>
      <Links>
        <a href="#top">
          Compare with similar items
        </a>
      </Links>
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
      <img className="ad" src="https://images-na.ssl-images-amazon.com/images/G/01/campus/DowntownSanJose/SanJoseState._CB512681958_.png" alt="Advert" />
    </Container>
  );
};

Summary.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    unique_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    primary_image: PropTypes.string.isRequired,
    review_one_star_count: PropTypes.number.isRequired,
    review_two_star_count: PropTypes.number.isRequired,
    review_three_star_count: PropTypes.number.isRequired,
    review_four_star_count: PropTypes.number.isRequired,
    review_five_star_count: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
    question_count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    total_price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    is_prime: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Summary;
