import React, {useEffect, useState} from 'react'
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import Swal from 'sweetalert2'
import {useDispatch, useSelector} from 'react-redux'
import {uiCloseModal} from '../actions/ui'
import {
    eventClearActiveEvent,
    eventStartAddNew,
    eventStartUpdated,
} from '../actions/events'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#root')
const now = moment().minutes(0).seconds(0).add(1, 'hours')
const later = now.clone().add(1, 'hours')

const initEvent = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: later.toDate(),
}

export const CalendarModal = () => {
    const [dateStart, setDateStart] = useState(now.toDate())
    const [dateEnd, setDateEnd] = useState(later.toDate())
    const [titleValid, setTitleValid] = useState(true)

    const {activeEvent} = useSelector(state => state.calendar)
    const {modalOpen} = useSelector(state => state.ui)

    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState(initEvent)

    const {title, notes, start, end} = formValues

    useEffect(() => {
        if (activeEvent) {
            setFormValues(activeEvent)
        } else {
            setFormValues(initEvent)
        }
    }, [setFormValues, activeEvent])

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })
    }

    const closeModal = () => {
        dispatch(uiCloseModal())
        dispatch(eventClearActiveEvent())
        setFormValues(initEvent)
    }
    const handleStartDateChange = e => {
        setDateStart(e)
        setFormValues({
            ...formValues,
            start: e,
        })
    }
    const handleEndDateChange = e => {
        setDateEnd(e)
        setFormValues({
            ...formValues,
            end: e,
        })
    }

    const handleSubmitForm = e => {
        e.preventDefault()

        const momentStart = moment(start)
        const momentEnd = moment(end)

        if (momentStart.isSameOrAfter(momentEnd)) {
            return Swal.fire(
                'Error',
                'The end date must be greater than the start date',
                'error',
            )
        }
        if (title.trim().length < 2) {
            return setTitleValid(false)
        }

        if (activeEvent) {
            dispatch(eventStartUpdated(formValues))
        } else {
            dispatch(eventStartAddNew(formValues))
        }

        setTitleValid(true)
        closeModal()
    }
    return (
        <Modal
            isOpen={modalOpen}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1> {activeEvent ? 'Edit Event' : 'New Event'} </h1>
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>
                <div className="form-group">
                    <label>Start date and time</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleStartDateChange}
                        value={dateStart}
                    />
                </div>

                <div className="form-group">
                    <label>End date and time</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        minDate={dateStart}
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Title and notes</label>
                    <input
                        type="text"
                        className={`form-control ${
                            !titleValid && 'is-invalid'
                        }`}
                        placeholder="Title of event"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        Description
                    </small>
                </div>

                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notes"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">
                        Additional Information
                    </small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Save</span>
                </button>
            </form>
        </Modal>
    )
}
