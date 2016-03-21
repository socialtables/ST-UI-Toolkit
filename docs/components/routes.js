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
import TextBoxDocumentation from './components/TextBoxDocumentation';
import CheckboxDocumentation from './components/CheckboxDocumentation';
import TabsDocumentation from './components/TabsDocumentation';
import ModalDocumentation from './components/ModalDocumentation';
import RadioButtonDocumentation from './components/RadioButtonDocumentation';
import SelectBoxDocumentation from './components/SelectBoxDocumentation';

const routes = (
  <Route path="/" component={Base}>
    <Route path="getting-started" component={GettingStarted}/>
    <Route path="component/button" component={ButtonDocumentation}/>
    <Route path="component/card" component={CardDocumentation}/>
    <Route path="component/text-box" component={TextBoxDocumentation}/>
    <Route path="component/checkbox" component={CheckboxDocumentation}/>
    <Route path="component/tabs" component={TabsDocumentation}/>
    <Route path="component/modal" component={ModalDocumentation}/>
    <Route path="component/radio-button" component={RadioButtonDocumentation}/>
    <Route path="component/select-box" component={SelectBoxDocumentation}/>
    <Route path="about" component={About}/>
    <Route path="guide/introducing" component={Introducing}/>
    <Route path="guide/how-to-use" component={HowDoIUse}/>
    <Route path="guide/adding-components" component={AddingComponents}/>
    <Route path="guide/component-styling" component={ComponentStyling}/>
    <IndexRoute component={Home}/>
  </Route>
);

module.exports = routes;
