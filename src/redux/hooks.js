import {
    useSelector
} from 'react-redux'

export const useRedux = () => {

    const users = useSelector(state => state.users.list)
    const profile = useSelector(state => state.users.profile)
    const xauth = useSelector(state => state.users.xauth)

    return {
        users, profile, xauth
    }
}