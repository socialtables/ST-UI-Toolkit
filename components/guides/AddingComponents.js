import React, {Component} from 'react';
import {Card, Toggle} from 'belle';
import Code from '../Code';

export default class AddingComponents extends Component {

  render() {
    return (<div>
      <h1 style={ {marginTop: 0, marginBottom: 20} }>How Do I Add a Component To the Toolkit?</h1>

      <div>
        To add a new component to the toolkit, do the following:
        <ol>
          <li style={todoListingStyles}>Create the component in the <b>/src/components</b> directory. Create a new file for the component</li>
          <li style={todoListingStyles}>Add the default styles for the component to the <b>/src/style</b> directory. Create a new file for the component</li>
          <li style={todoListingStyles}>Add unit tests for the component to the <b>/src/__tests__</b> directory. Create a new file for the component</li>
          <li style={todoListingStyles}>Add an example for the component. To add an example, do the following:
            <ul>
              <li>Add a documentation file for your component to the <b>/docs/components/components</b></li>
              <li>
                <div>Your documentation file should include the following:</div>
                <ul>
                  <li>An instance of the component itself</li>
                  <li>A code example</li>
                  <li>The list of props that component takes</li>
                </ul>
                <div>See the other files in the directory as an example/template</div>
              </li>
              <li>Create a route for your documentation file in the <b>/docs/components/routes.js</b> file.</li>
              <li>Create a link to your route in the <b>/docs/components/Base.js</b> file.</li>
            </ul>
          </li>
          <li style={todoListingStyles}>
            As you are adding the component to the docs page, you can run the page locally see it update with
            your changes as you update the code. 
            <ul>
              <li>In your terminal, cd into the <b>/docs</b> directory</li>
              <li>Type <b>npm install</b>, and then <b>npm start</b> to launch the docs page locally on port 3000</li>
              <li>Open up your browser and navigate to <a href="http://localhost:3000/" target="_blank">http://localhost:3000</a></li>
              <li>As you update the code, the changes should occur in realtime in the browser via webpack-dev-server</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>);
  }
}

const todoListingStyles = {
  margin: "5px 0"
};