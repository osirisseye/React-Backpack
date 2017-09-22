import React, { PropTypes } from 'react';
import { Section } from './Section.js';
import './../styles/app.css';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <h1>First React Section</h1>
        <Section />
      </div>
      
      
    );
  }
};
