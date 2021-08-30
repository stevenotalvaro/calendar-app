import React, {useState} from 'react'
import {Navbar} from '../ui/Navbar'

import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {CalendarEvent} from './CalendarEvent'
import {CalendarModal} from './CalendarModal'

const localizer = momentLocalizer(moment) // or globalizeLocalizer

const events = [
    {
        title: 'Cumpleaños de don chimbo',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar pastel',
        user: {
            _id: '123',
            name: 'Steven',
        },
    },
]

export const CalendarScreen = () => {
    const [lastView, setLastView] = useState(
        localStorage.getItem('lastView') || 'month',
    )

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
    }

    const onSelectEvent = e => {
        console.log(e)
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
            <CalendarModal />
        </div>
    )
}
