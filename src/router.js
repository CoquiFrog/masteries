import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Buttons from './components/Buttons/Buttons';
import Tests from './components/Tests/Tests';
import Video from './components/Video/Video';
import Product from './Product/Product';
// import Mount from './components/Mount/Mount';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/buttons' component={Buttons}/>
        <Route path='/tests' component={Tests}
        render={() => <h3>This is my render right here!</h3> } />/>
        <Route path='/product/:id' component={Product}/>
        {/* <Route path='/mount' component={Mount}/> */}
        
    </Switch>


)