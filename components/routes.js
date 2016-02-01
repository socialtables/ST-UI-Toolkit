import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Base from './Base';

import Introducing from './guides/Introducing';
import HowDoIUse from './guides/HowDoIUse';
import AddingComponents from './guides/AddingComponents';
import ComponentStyling from './guides/ComponentStyling';

import Home from './Home';
import About from './About';
import Configuration from './Configuration';
import GettingStarted from './GettingStarted';
import Philosophy from './Philosophy';

import ButtonDocumentation from './components/ButtonDocumentation';
import CardDocumentation from './components/CardDocumentation';

const routes = (
  <Route path="/" component={Base}>
    <Route path="getting-started" component={GettingStarted}/>
    <Route path="component/button" component={ButtonDocumentation}/>
    <Route path="component/card" component={CardDocumentation}/>
    <Route path="configuration" component={Configuration}/>
    <Route path="philosophy" component={Philosophy}/>
    <Route path="about" component={About}/>
    <Route path="guide/introducing" component={Introducing}/>
    <Route path="guide/how-to-use" component={HowDoIUse}/>
    <Route path="guide/adding-components" component={AddingComponents}/>
    <Route path="guide/component-styling" component={ComponentStyling}/>
    <IndexRoute component={Home}/>
  </Route>
);

module.exports = routes;
