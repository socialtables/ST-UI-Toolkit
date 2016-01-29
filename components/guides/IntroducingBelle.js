import React, {Component} from 'react';
import {Card, Toggle} from 'belle';
import Code from '../Code';

const basicToggleExample = `<!-- all the JSX code you need -->
<Toggle defaultValue/>`;

const selectExample = `<!-- all the JSX code you need for the example above -->
<Select defaultValue="tokyo"
        menuStyle={ { height: 160,
                             overflow: 'scroll' } }>
  <Option value="berlin">Berlin</Option>
  <Option value="hong-kong">Hong Kong</Option>
  <Option value="istanbul">Istanbul</Option>
  <Option value="rome">Rome</Option>
  <Option value="san-francisco">San Francisco</Option>
  <Option value="tokyo">Tokyo</Option>
  <Option value="vienna">Vienna</Option>
</Select>`;

export default class Why extends Component {

  render() {
    return (<div>
      <p style={{ color: '#999', marginTop: 19, fontSize: 15, float: 'right' }}>Nik Graf, 15th July 2015 </p>

      <h1 style={ {marginTop: 0, marginBottom: 20} }>Introducing Belle</h1>

      <Card style={{ borderTop: '1px solid #f2f2f2' }}>
        <img src="images/overview.png"
             style={{ width: '100%' }} />
      </Card>

      <p>
        Belle is a set of React components including Toggle, ComboBox, Rating, TextInput, Button, Card & Select. Many more like DatePicker, NumberInput, DropZone & Menu will come soon. As of today we hit version 1.0.0 :)
      </p>
    </div>);
  }
}
