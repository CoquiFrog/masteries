import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Buttons from './components/Buttons/Buttons';
import Tests from './components/Tests/Tests';
import Video from './components/Video/Video';
import Product from './Product/Product';
import Htmlstuff from './components/Htmlstuff/Htmlstuff';
// import Mount from './components/Mount/Mount';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/buttons' component={Buttons}/>
        <Route path='/tests' component={Tests}/>
        <Route path='/video' component={Video}/>
        <Route path='/product/:id' component={Product}/>
        {/* <Route path='/mount' component={Mount}/> */}
        <Route path='/htmlstuff' component={Htmlstuff} />
        <Route path='/Api' component={Api}/>
        
    </Switch>


)