import React, {useState} from 'react'
import {Navbar} from '../ui/Navbar'

import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {CalendarEvent} from './CalendarEvent'
import {CalendarModal} from './CalendarModal'
import {useDispatch, useSelector} from 'react-redux'
import {uiOpenModal} from '../actions/ui'
import {eventSetActive} from '../actions/events'
import {AddNewFab} from '../types/AddNewFab'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

export const CalendarScreen = () => {
    const [lastView, setLastView] = useState(
        localStorage.getItem('lastView') || 'month',
    )

    const dispatch = useDispatch()
    const {events} = useSelector(state => state.calendar)
    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        }
        return {
            style,
        }
    }

    const onDoubleClick = e => {
        console.log(e)
        dispatch(uiOpenModal())
    }

    const onSelectEvent = e => {
        dispatch(eventSetActive(e))
    }

    const onViewChange = e => {
        setLastView(e)
        localStorage.setItem('lastView', e)
    }

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
                components={{event: CalendarEvent}}
            />
            <AddNewFab />
            <CalendarModal />
        </div>
    )
}
