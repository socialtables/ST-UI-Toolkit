import React, {Component} from 'react';
import {Card, Toggle} from 'belle';
import Code from '../Code';

export default class ComponentStyling extends Component {

  render() {
    return (<div>
      <h1 style={ {marginTop: 0, marginBottom: 20} }>Component Styling</h1>

      <Card style={{ borderTop: '1px solid #f2f2f2' }}>
        <img src="images/overview.png"
             style={{ width: '100%' }} />
      </Card>

      <p>
        
      </p>
    </div>);
  }
}
