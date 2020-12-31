import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('render app', () => {
  shallow(<App />);
});
