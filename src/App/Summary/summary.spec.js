/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Summary from './summary.jsx';

describe('Summary Component', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Summary />);
    expect(component).toMatchSnapshot();
  });
});
