import React, {Component} from 'react';
import {Card, Toggle} from 'belle';
import Code from '../Code';

export default class Why extends Component {

  render() {
    return (<div>
      <h1 style={ {marginTop: 0, marginBottom: 20} }>What is UI-SToolkit?</h1>

      <p>
        UI-SToolkit is an internal component library used here at Social Tables.
        <br/><br/>
        As we design the User Interfaces for various products here at Social Tables, we often times run into common patters or components that we end up re-implementing in multiple places.
        <br/><br/>
        This library allows us to consolidate all of our reusable patterns into a single module that can be used by any Social Table's application.
      </p>
    </div>);
  }
}
