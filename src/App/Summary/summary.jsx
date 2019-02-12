import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './summary.style';

const Summary = ({ name }) => (
  <Container>
    {name}
  </Container>
);

Summary.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Summary;
