import React from 'react';
import { shallow } from 'enzyme';
import Services from './Services';

describe('Services component', () => {
  it('renders without crashing', () => {
    shallow(<Services />);
  });
});
