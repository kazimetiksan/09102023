import {
    useSelector
} from 'react-redux'

export const useRedux = () => {

    const users = useSelector(state => state.users)

    return {
        users
    }
}