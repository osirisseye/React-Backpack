import React from 'react'
import { mount } from 'enzyme'
import App from './App.js'


describe('App', () => {
    it('renders without crashing', () => {
        mount(<App />);
    });

    it('basic test #1', () => {
        expect(2+2).toEqual(4);
    });

});


