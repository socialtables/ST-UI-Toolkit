import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Base from './Base';

import Introducing from './guides/Introducing';
import HowDoIUse from './guides/HowDoIUse';
import AddingComponents from './guides/AddingComponents';
import ComponentStyling from './guides/ComponentStyling';

import Home from './Home';
import About from './About';
import GettingStarted from './GettingStarted';

import ButtonDocumentation from './components/ButtonDocumentation';
import CardDocumentation from './components/CardDocumentation';
import RoundTextBoxDocumentation from './components/RoundTextBoxDocumentation';

const routes = (
  <Route path="/" component={Base}>
    <Route path="getting-started" component={GettingStarted}/>
    <Route path="component/button" component={ButtonDocumentation}/>
    <Route path="component/card" component={CardDocumentation}/>
    <Route path="component/round-text-box" component={RoundTextBoxDocumentation}/>
    <Route path="about" component={About}/>
    <Route path="guide/introducing" component={Introducing}/>
    <Route path="guide/how-to-use" component={HowDoIUse}/>
    <Route path="guide/adding-components" component={AddingComponents}/>
    <Route path="guide/component-styling" component={ComponentStyling}/>
    <IndexRoute component={Home}/>
  </Route>
);

module.exports = routes;
