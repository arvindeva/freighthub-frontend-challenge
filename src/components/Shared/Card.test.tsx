import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card component', () => {
  it('renders without crashing', () => {
    shallow(<Card />);
  });
});
