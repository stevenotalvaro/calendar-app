import React from 'react'
import {useDispatch} from 'react-redux'
import {eventDeleted} from '../actions/events'

export const DeleteeventFab = () => {
    const dispatch = useDispatch()

    const handleEvent = () => {
        dispatch(eventDeleted())
    }
    return (
        <button onClick={handleEvent} className="btn btn-danger fab-danger">
            <i className="fas fa-trash"></i>
            <span> Delete event</span>
        </button>
    )
}
