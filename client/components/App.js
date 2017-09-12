import React, { PropTypes } from 'react';
import { Section } from './Section.js';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>First React Section</h1>
        <Section />
      </div>
      
    );
  }
};
