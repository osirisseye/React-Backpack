import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from 'App';


describe('App', () => {
    it('renders without crashing', () => {
            mount(<App />);
    });

    it('App', () => {
        const div = document.createElement("div");
        ReactDOM.render(<App />, div);
    });
});


