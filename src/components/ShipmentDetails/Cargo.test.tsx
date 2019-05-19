import React from 'react';
import { shallow } from 'enzyme';
import Cargo from './Cargo';

describe('Cargo component', () => {
  it('renders without crashing', () => {
    shallow(<Cargo />);
  });
});
