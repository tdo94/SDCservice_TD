import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './gallery.style';
import GalleryImage from './Gallery-Image/Gallery-Image';
import GalleryPicker from './Gallery-Picker/Gallery-Picker';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImg: props.images[0],
    };
  }

  render() {
    const { currentImg } = this.state;
    const { images } = this.props;
    return (
      <Container>
        <GalleryPicker images={images} />
        <GalleryImage image={currentImg} />
      </Container>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
