import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './Gallery-Image.style';

const GalleryImage = ({ image }) => (
  <Container>
    <div>
      <img src={image} alt="example" />
    </div>
  </Container>
);

GalleryImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default GalleryImage;
