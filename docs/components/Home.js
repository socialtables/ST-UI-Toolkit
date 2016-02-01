import React, {Component} from 'react';
import GettingStarted from './GettingStarted';
import {Card} from 'belle';

export default class Home extends Component {

  render() {
    return (
      <div style={{ marginTop: -20 }}>
        <p>
          UI-SToolkit provides you with a set of React components that can be used across Social Table's projects.
        </p>

        <p>
          <h3>Why?</h3>
          We decided to build UI-Stoolkit because we found that we frequently re-created common components across applications.
          <br/>
          We wanted a toolkit where we could consolidate these patterns into a single framework / toolkit that could just be imported
          into any project.
        </p>

        <h3>Browser Support</h3>
        <ul>
          <li>Chrome (mobile and desktop)</li>
          <li>Safari (mobile and desktop)</li>
          <li>Firefox</li>
          <li>Internet Explorer 10, 11</li>
          <li>Microsoft Edge</li>
        </ul>

        <br /><br />

        <GettingStarted />

      </div>
    );
  }
}
