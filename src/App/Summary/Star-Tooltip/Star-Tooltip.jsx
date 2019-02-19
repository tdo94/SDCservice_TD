/* eslint-env browser */
import React from 'react';
import PropTypes from 'prop-types';

import { Container, Bar } from './Star-Tooltip.style';

const StarTooltip = ({ ratingsObj, ratingAvg }) => {
  const calcPercentages = (() => ([
    Math.round(ratingsObj.review_five_star_count / ratingsObj.review_count * 100),
    Math.round(ratingsObj.review_four_star_count / ratingsObj.review_count * 100),
    Math.round(ratingsObj.review_three_star_count / ratingsObj.review_count * 100),
    Math.round(ratingsObj.review_two_star_count / ratingsObj.review_count * 100),
    Math.round(ratingsObj.review_one_star_count / ratingsObj.review_count * 100),
  ]))();
  const rows = calcPercentages.map((value, index) => (
    <div key={value + Math.random()} className="row">
      <p>{`${5 - index} star`}</p>
      <Bar>
        <div className="color" />
      </Bar>
      <p
        style={{
          color: '#767676',
          textDecoration: 'none !important',
          display: 'inline-block',
        }}
      >
        {`${value}%`}
      </p>
    </div>
  ));
  const { bottom, width, left } = document.querySelector('div.stars').getBoundingClientRect();
  setTimeout(() => {
    const divs = document.querySelectorAll('div.color');
    for (let i = 0; i < divs.length; i += 1) {
      divs[i].style.width = `${calcPercentages[i]}%`;
    }
  }, 1);
  return (
    <Container
      style={{
        top: bottom + 5,
        left: left - 197 / 2 + width / 2,
      }}
    >
      <div className="row">
        <p>{`${Math.round(ratingAvg * 10) / 10} out of 5 stars`}</p>
      </div>
      {rows}
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
