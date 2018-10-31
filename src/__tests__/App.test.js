import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Header from '../components/views/layout/Header';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders the landing page', () => {
  expect(wrapped.find(Header).length).toEqual(1);
});
