import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const storeExtractor = useSelector(state => state);

    const { token } = storeExtractor;

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    if (token) {
                        return <Component {...props} />
                    } else {
                        return <Redirect to={
                            {
                                pathname: "/admin",
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    }
                }
            } />
    )
}