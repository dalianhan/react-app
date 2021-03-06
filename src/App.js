import React, { Component } from 'react'
import {HashRouter,BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Admin from './pages/admin/admin.jsx'

export default class App extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/" component={Admin}></Route>
                </Switch>
            </HashRouter>
        )
    }
}