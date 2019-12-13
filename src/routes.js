import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './Pages/Inicial';
import Series from './Pages/Series';

export default function src(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Inicial} />
            <Route path='/series' component={Series} />
        </Switch>
        </BrowserRouter>
    )
}
