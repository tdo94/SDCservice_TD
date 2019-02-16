/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Star-Tooltip.style';

const StarTooltip = ({ ratingsObj, ratingAvg }) => {
  const calcPercentages = ratings => ({
    oneStarPercentage: Math.round(ratings.review_one_star_count / ratings.review_count * 100),
    twoStarPercentage: Math.round(ratings.review_two_star_count / ratings.review_count * 100),
    threeStarPercentage: Math.round(ratings.review_three_star_count / ratings.review_count * 100),
    fourStarPercentage: Math.round(ratings.review_four_star_count / ratings.review_count * 100),
    fiveStarPercentage: Math.round(ratings.review_five_star_count / ratings.review_count * 100),
  });
  const {
    oneStarPercentage,
    twoStarPercentage,
    threeStarPercentage,
    fourStarPercentage,
    fiveStarPercentage,
  } = calcPercentages(ratingsObj);
  const { bottom, width, left } = document.querySelector('div.stars').getBoundingClientRect();
  return (
    <Container style={{
      top: bottom + 10,
      left: left - 197 / 2 + width / 2,
    }}
    >
      <p>{ratingAvg}</p>
      <p>{oneStarPercentage}</p>
      <p>{twoStarPercentage}</p>
      <p>{threeStarPercentage}</p>
      <p>{fourStarPercentage}</p>
      <p>{fiveStarPercentage}</p>
    </Container>
  );
};

StarTooltip.propTypes = {
  ratingsObj: PropTypes.shape({
    review_one_star_count: PropTypes.number.isRequired,
    review_two_star_count: PropTypes.number.isRequired,
    review_three_star_count: PropTypes.number.isRequired,
    review_four_star_count: PropTypes.number.isRequired,
    review_five_star_count: PropTypes.number.isRequired,
    review_count: PropTypes.number.isRequired,
  }).isRequired,
  ratingAvg: PropTypes.number.isRequired,
};

export default StarTooltip;
