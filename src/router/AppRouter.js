import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from 'react-router-dom'
import {LoginScreen} from '../auth/LoginScreen'
import {CalendarScreen} from '../calendar/CalendarScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen}></Route>
                    <Route exact path="/" component={CalendarScreen}></Route>
                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}
