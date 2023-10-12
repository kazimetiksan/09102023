import * as userSlice from './userSlice'

import {
    store
} from './store'

// SYNC
export const add = (params) => store.dispatch(userSlice.add(params))

// ASYNC
export const getAll = (params) => store.dispatch(userSlice.getAll(params))
export const addNew = (params) => store.dispatch(userSlice.addNew(params))
