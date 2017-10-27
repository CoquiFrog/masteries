import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Buttons from './components/Buttons/Buttons';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/buttons' component={Buttons}/>
    </Switch>


)