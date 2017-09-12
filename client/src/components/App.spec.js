import React from 'react'
import { mount } from 'enzyme'
import App from './App.js'


describe('App', () => {
    it('renders without crashing', () => {
            mount(<App />);
    });

    it('name of the test', () => {
        expect(2+2).toEqual(4);
    });

});


