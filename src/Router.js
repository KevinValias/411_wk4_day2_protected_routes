import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './containers/Home'
import About from './components/About'
import Car from './components/Car';
import Login from './components/Login';



// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"


// Write ProtectedRoute function here
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies['loggedIn'] ? true : false
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return(
        <Route
            {...rest}
            render={(props) =>
                checkAuth() ? (
                     <Component {...props} />
                ) : (
                      <Redirect to="/login" />
                )
            }
         />
     )
}
const Router = () => {
    return (
        <Switch>
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/car/:id" component={Car} />
            <Route
                path='*'
                component={() =>
                    'This is not the page your looking for.(404)'
                }
             />
        </Switch>
    );
};

export default Router;