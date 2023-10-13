// redux data seti

import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'

import axios from 'axios'

const initialState = {
    list: [],
    profile: {},
    xauth: undefined
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, {payload}) => {
            return [
                ...state,
                payload
            ]
        },
        updateItem: (state, {payload}) => {

            return state.map((item) => {

                if (item._id === payload._id) {
                    return payload
                }

                return item
            })
        },
        removeItem: (state, {payload}) => {

            return state.filter(item => item._id !== payload)
        },
        setAll: (state, {payload}) => {
            // tüm state i set et

            console.log('redux response', payload)
            // return payload
            state.list = payload
        },
        setXAuth: (state, {payload}) => {

            state.xauth = payload
        },
        setProfile: (state, {payload}) => {

            state.profile = payload
        },
    }
})

export const {
    add, 
    setAll, 
    setXAuth, 
    updateItem, 
    removeItem,
    setProfile
} = userSlice.actions

// ASYNC

export const getMe = createAsyncThunk('getMe', (params, {getState, dispatch}) => {

    console.log('getMe params', params)

    const {
        users: {
            xauth
        }
    } = getState()
    console.log('get state xauth', xauth)

    const {
        callback
    } = params

    const url = '/api/me'
    axios.get(url, {
        headers: {
            xauth
        }
    })
    .then((response) => {

        console.log('user profile', response.data)

        dispatch(
            setProfile(
                response.data
            )
        )

        callback()
    })
    .catch((error) => {
        callback()
    })
})

export const getAll = createAsyncThunk('getAll', (params, {getState, dispatch}) => {

    console.log('getAll params', params)

    const {
        callback
    } = params

    const url = '/api/users'
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

export const update = createAsyncThunk('update', (params, {getState, dispatch}) => {

    console.log('update params', params)

    const {
        callback,
        newUser,
        _id
    } = params

    const url = `https://reactpm.azurewebsites.net/api/user/${_id}`
    axios.patch(url, newUser)
    .then((response) => {
        dispatch(
            updateItem(
                response.data
            )
        )

        console.log('update response', response.data)

        callback()
    })
    .catch((error) => {
        callback()
    })
})

export const remove = createAsyncThunk('remove', (params, {getState, dispatch}) => {

    console.log('remove params', params)

    const {
        callback,
        _id
    } = params

    const url = `https://reactpm.azurewebsites.net/api/user/${_id}`
    axios.delete(url)
    .then((response) => {

        if (response.status === 200) {
            dispatch(
                removeItem(
                    _id
                )
            )
        }

        console.log('remove response status', response.status)

        callback()
    })
    .catch((error) => {
        callback()
    })
})

export const signUp = createAsyncThunk('signUp', (params, {getState, dispatch}) => {

    console.log('signUp params', params)

    const {
        callback,
        userInfo
    } = params

    const url = '/api/signup'
    axios.post(url, userInfo)
    .then((response) => {

        console.log('signUp response', response.data)

        callback()
    })
    .catch((error) => {
        callback()
    })
})

export const signIn = createAsyncThunk('signIn', (params, {getState, dispatch}) => {

    console.log('signIn params', params)

    const {
        callback,
        userInfo
    } = params

    const url = '/api/signin'
    axios.post(url, userInfo)
    .then((response) => {

        console.log('signIn response', response.data)
        console.log('signIn header', response.headers.xauth)

        const xauth = response.headers.xauth

        sessionStorage.setItem('xauth', xauth)

        dispatch(
            setProfile(
                response.data
            )
        )

        dispatch(
            setXAuth(
                xauth
            )
        )

        callback(true)
    })
    .catch((error) => {
        callback(false)
    })
})

export default userSlice.reducer

