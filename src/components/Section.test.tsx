import React from 'react';
import { shallow } from 'enzyme';
import { Section } from './Section';

describe('Section component', () => {
  it('renders without crashing', () => {
    shallow(<Section />);
  });
});
