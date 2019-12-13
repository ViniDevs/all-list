import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './Pages/Inicial';
import Series from './Pages/Series';
import Movies from './Pages/Movies';

export default function src(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Inicial} />
            <Route path='/series' component={Series} />
            <Route path='/movies' component={Movies} />
        </Switch>
        </BrowserRouter>
    )
}
