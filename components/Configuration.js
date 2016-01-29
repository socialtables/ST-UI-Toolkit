import React, {Component} from 'react';
import Code from './Code';
import ThemeSwitch from '../theme/ThemeSwitch';

export default class Configuration extends Component {

  render() {
    return (<div>
      <h2 style={ {marginTop: 0, marginBottom: 40} }>Configuration</h2>

      <p>
        UI-SToolkit provides you with the ability to modify the default appearance of
        it's components and even some of the behaviour.
      </p>

    </div>);
  }
}
