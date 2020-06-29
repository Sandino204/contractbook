import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './pages/Register1/index'
import Register from './pages/Index'


function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Register}></Route>
                <Route exact path="/Register" component={Index}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes