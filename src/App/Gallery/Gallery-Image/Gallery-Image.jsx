import React from 'react';

import { Container } from './Gallery-Image.style';

export default () => {
  const text = 'gallery image goes here';
  return (
    <Container>
      <div>
        {text}
      </div>
    </Container>
  );
};
