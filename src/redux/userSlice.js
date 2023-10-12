// redux data seti

import {
    createSlice
} from '@reduxjs/toolkit'

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
        }
    }
})

export const {add} = userSlice.actions

export default userSlice.reducer

