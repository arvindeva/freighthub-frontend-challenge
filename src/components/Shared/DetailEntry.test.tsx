import React from 'react';
import { shallow } from 'enzyme';
import { DetailEntry } from './DetailEntry';

describe('DetailEntry component', () => {
  it('renders without crashing', () => {
    shallow(<DetailEntry />);
  });
});
