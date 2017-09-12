import React from 'react';
import { mount } from 'enzyme';
import App from 'App';

it('App', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});

