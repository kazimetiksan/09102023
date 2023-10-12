import * as userSlice from './userSlice'

import {
    store
} from './store'

export const add = (params) => store.dispatch(userSlice.add(params))
export const getAll = (params) => store.dispatch(userSlice.getAll(params))