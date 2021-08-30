import React, {useState} from 'react'
import Modal from 'react-modal'

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

export const CalendarModal = () => {
    const closeModal = () => {}
    return (
        <Modal
            isOpen={true}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1>HOla mundo</h1>
        </Modal>
    )
}
