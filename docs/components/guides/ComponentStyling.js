import React, {Component} from 'react';
import {Card, Toggle} from '@socialtables/st-ui-toolkit';
import Code from '../Code';

const inlineStylesExample = `const React = require('react');
const ReactDOM = require('react-dom');
const STUIToolkit = require('@socialtables/st-ui-toolkit');
const Button = STUIToolkit.Button;

class App extends React.Component {
  render() {
    return <div>
      /* Renders button with yellow (#ffff00) color instead of #cb5599 */
      <Button
        style={ {base: background: "#ffff00"} }
        onClick={this._clickHandler} />
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('react-root'));`;

const classNameExample = `const React = require('react');
const ReactDOM = require('react-dom');
const STUIToolkit = require('@socialtables/st-ui-toolkit');
const Button = STUIToolkit.Button;

class App extends React.Component {
  _clickHandler() {
    alert("YOLO");
  }

  render() {
    return <div>
      /* CSS can style against .my-confirm-btn class (but cannot override default properties such as 'background') */
      <Button
        className="my-confirm-btn"
        onClick={this._clickHandler} />
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('react-root'));`;

export default class ComponentStyling extends Component {

  render() {
    return (<div>
      <h1 style={ {marginTop: 0, marginBottom: 20} }>Component Styling</h1>
      <p>
        Based on recent decisions made by popular React component toolkits such as Belle and MaterialUI, we have decided to have <b>default styles for components be done via inline styles using <a href="https://github.com/FormidableLabs/radium" target="_blank">Radium</a></b>
        <br/>
        <br/>
        This provides the following benefits:
        <ul>
          <li>Allows a component to be imported into a project and render immediately (style + functionality) without having the application load in an external stylesheet that contains all the component styles.</li>
          <li>Radium has support for complex functionality such as browser states (:hover, :focus, :active) within inline-lines and generating vendor prefixes</li>
        </ul>
        All components will have a set of default styles defined so that they can be imported into a project and immediately used.
        <br/>
        However, if the user desires to override any of the defaults, they can do so by passing a <i>style</i> property down to the component.

        <Code value={ inlineStylesExample } style={ {marginTop: 40} } />

        For information on how to use Radium, <a href="https://github.com/FormidableLabs/radium" target="_blank">please see the Radium documentation.</a>

        <h2>CSS Styles</h2>

        However, users can still specify a <i>className</i> property that will be applied to the outermost element within the component, which allows them to add style properties via CSS.
        <br/>
        <br/>
        <b>NOTE:</b> that default styles cannot be overriden by CSS (since they are applied as inline styles).

        <Code value={ classNameExample } style={ {marginTop: 40} } />

      </p>
    </div>);
  }
}
