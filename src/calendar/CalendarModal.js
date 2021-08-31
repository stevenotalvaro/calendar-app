import React, {useState} from 'react'
import Modal from 'react-modal'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import Swal from 'sweetalert2'
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

export const CalendarModal = () => {
    const [dateStart, setDateStart] = useState(now.toDate())
    const [dateEnd, setDateEnd] = useState(later.toDate())
    const [titleValid, setTitleValid] = useState(true)

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: later.toDate(),
    })

    const {title, notes, start, end} = formValues

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })
    }

    const closeModal = () => {}
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

        setTitleValid(true)
        closeModal()
    }
    return (
        <Modal
            isOpen={true}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1> New Event </h1>
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
