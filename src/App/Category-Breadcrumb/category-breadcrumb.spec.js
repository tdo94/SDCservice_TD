/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import CategoryBreadcrumb from './category-breadcrumb.jsx';

describe('CategoryBreadcrumb Component', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<CategoryBreadcrumb />);
    expect(component).toMatchSnapshot();
  });
});
