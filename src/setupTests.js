import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new adapter() });

/* Globals only for tests */
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.MemoryRouter = MemoryRouter;
