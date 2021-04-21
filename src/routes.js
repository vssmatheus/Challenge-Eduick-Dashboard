import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './dashboard/Dashboard';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}