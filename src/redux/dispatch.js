import * as userSlice from './userSlice'

import {
    store
} from './store'

// SYNC
export const add = (params) => store.dispatch(userSlice.add(params))

// ASYNC
export const getAll = (params) => store.dispatch(userSlice.getAll(params))
export const addNew = (params) => store.dispatch(userSlice.addNew(params))
export const update = (params) => store.dispatch(userSlice.update(params))
export const remove = (params) => store.dispatch(userSlice.remove(params))
export const signUp = (params) => store.dispatch(userSlice.signUp(params))
export const signIn = (params) => store.dispatch(userSlice.signIn(params))
