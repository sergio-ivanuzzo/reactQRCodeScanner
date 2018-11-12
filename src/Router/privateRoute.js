import {renderMergedProps} from './renderMergedProps';
import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({ component, redirectTo, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return auth.loggedIn() ? (
                renderMergedProps(component, routeProps, rest)
            ) : (
                <Redirect to={{
                    pathname: redirectTo,
                    state: { from: routeProps.location }
                }}/>
            );
        }}/>
    );
};