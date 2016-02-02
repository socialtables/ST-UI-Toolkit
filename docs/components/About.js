import React, {Component} from 'react';

export default class FuturePlans extends Component {

  render() {
    return (<div>
      <h2 style={ {marginTop: 40, marginBottom: 40} }>Special Thanks</h2>

      <p>
        Thanks to the <a href="http://nikgraf.github.io/belle" target="_blank">Belle React Component Toolkit</a> for serving as the basis and primary influence for this toolkit.
      </p>
      <p>
        Thanks to <a href="http://julianhaddad.com/" target="_blank">Julian Haddad (Lead Designer at Social Tables)</a> for designing most if not all of the components!
      </p>

      <h2 style={ {marginTop: 40, marginBottom: 40} }>Future Plans</h2>

      <ul>
        <li>Add more components!</li>
        <li>Continue to dogfood the library interally until we deem it worthy of open-sourcing</li>
        <li>Flesh out the test-suite</li>
      </ul>
    </div>);
  }
}
