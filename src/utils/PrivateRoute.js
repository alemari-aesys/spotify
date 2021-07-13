import React from 'react'
import { Route, Redirect } from 'react-router'

export default function PrivateRoute({ component: Component, hash }) {

    return (
        <Route render={() => 
            hash ? <Component /> : <Redirect to="/" />
            }
        >
        </Route>
    )
}
