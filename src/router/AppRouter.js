import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import {startCheking} from '../actions/auth'
import {LoginScreen} from '../auth/LoginScreen'
import {CalendarScreen} from '../calendar/CalendarScreen'

export const AppRouter = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startCheking())
    }, [dispatch])

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
