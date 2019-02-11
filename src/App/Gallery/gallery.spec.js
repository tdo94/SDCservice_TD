/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Gallery from './gallery.jsx';

describe('Gallery Component', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Gallery />);
    expect(component).toMatchSnapshot();
  });
});
