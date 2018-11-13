import React from 'react';
import {Route} from 'react-router-dom';
import {renderMergedProps} from './renderMergedProps';

export const PropsRoute = ({ component, ...rest }) => {
    console.log('props token',rest.token)
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest);
        }}/>
    );
}