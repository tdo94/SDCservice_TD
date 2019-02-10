/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import App from './app.jsx';

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});
