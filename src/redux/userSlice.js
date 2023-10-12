// redux data seti

import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = [{
    firstName: 'Mehmet',
    lastName: 'Etiksan',
    age: 44
}, {
    firstName: 'Hakan',
    lastName: 'Demir',
    age: 42
}, {
    firstName: 'Elif',
    lastName: 'Tekin',
    age: 46
}]

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, {payload}) => {
            // user list içerisine yeni item ekleme
            console.log('güncel state', state)
            console.log('user params', payload)

            return [
                ...state,
                payload
            ]
        },
        setAll: (state, {payload}) => {
            // tüm state i set et

            console.log('redux response', payload)
            return payload
        },
        setXAuth: (state, {payload}) => {


        },
    }
})

export const {add, setAll, setXAuth} = userSlice.actions

// ASYNC

export const getAll = createAsyncThunk('getAll', (params, {getState, dispatch}) => {

    console.log('getAll params', params)

    const {
        callback
    } = params

    const url = 'https://reactpm.azurewebsites.net/api/users'
    axios.get(url)
    .then((response) => {
        dispatch(
            setAll(
                response.data
            )
        )

        callback()
    })
    .catch((error) => {
        callback()
    })
})

export const addNew = createAsyncThunk('addNew', (params, {getState, dispatch}) => {

    console.log('addNew params', params)

    const {
        callback,
        newUser
    } = params

    const url = 'https://reactpm.azurewebsites.net/api/user'
    axios.post(url, newUser)
    .then((response) => {
        dispatch(
            add(
                response.data
            )
        )

        console.log('addNew response', response.data)

        callback()
    })
    .catch((error) => {
        callback()
    })
})

export default userSlice.reducer

