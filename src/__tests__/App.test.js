import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/views/layout/Header';

it('renders the landing page', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(Header).length).toEqual(1);
});
