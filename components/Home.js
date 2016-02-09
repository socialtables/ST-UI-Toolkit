import React, {Component} from 'react';
import GettingStarted from './GettingStarted';
import {Card} from '@socialtables/st-ui-toolkit';

export default class Home extends Component {

  render() {
    return (
      <div style={{ marginTop: -20 }}>
        <div>
          ST-UI-Toolkit provides you with a set of React components that can be used across Social Table's projects.
        </div>

        <div>
          <h3>Why?</h3>
          We decided to build ST-UI-Toolkit because we found that we frequently re-created common components across applications.
          <br/>
          We wanted a toolkit where we could consolidate these patterns into a single framework / toolkit that could just be imported
          into any project.
        </div>

        <h3>Browser Support</h3>
        <ul>
          <li>Chrome (mobile and desktop)</li>
          <li>Safari (mobile and desktop)</li>
          <li>Firefox</li>
          <li>Internet Explorer 9, 10, 11</li>
          <li>Microsoft Edge</li>
        </ul>

        <br /><br />

        <GettingStarted />

      </div>
    );
  }
}
