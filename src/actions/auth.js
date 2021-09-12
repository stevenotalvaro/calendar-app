import Swal from 'sweetalert2'
import {fetchWithoutToken} from '../helpers/fetch'
import {types} from '../types/types'

export const startLogin = (email, password) => {
    return async dispatch => {
        const resp = await fetchWithoutToken('auth', {email, password}, 'POST')
        const body = await resp.json()

        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
        }

        dispatch(
            login({
                uid: body.uid,
                name: body.name,
            }),
        )
    }
}

export const startRegister = (email, password, name) => {
    return async dispatch => {
        const resp = await fetchWithoutToken(
            'auth/new',
            {email, password, name},
            'POST',
        )
        const body = await resp.json()

        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-date', new Date().getTime())
        } else {
            return Swal.fire('Error', body.msg, 'error')
        }

        dispatch(
            login({
                uid: body.uid,
                name: body.name,
            }),
        )
    }
}

const login = user => ({
    type: types.authLogin,
    payload: user,
})
