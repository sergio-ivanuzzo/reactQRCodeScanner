import {renderMergedProps} from './renderMergedProps';
import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({ component, redirectTo, ...rest }) => {
    console.log('rest=', rest)
    return (
        <Route {...rest} render={routeProps => {
            console.log('routeProps=', routeProps)
            return !!rest.token ? (
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