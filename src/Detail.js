import {
    useParams
} from 'react-router-dom'

import {
    useRedux
} from './redux/hooks'
import { useEffect, useState } from 'react'

const Detail = () => {

    const {users} = useRedux()

    const {_id} = useParams()

    const [user, setUser] = useState(undefined)

    useEffect(() => {
        if (users) {
            const found = users.find(user => user._id === _id)
            setUser(found)
        }
    }, [users])

    return (
        <div style={{
            margin: 20
        }}>Detay Sayfası {user?.firstName}</div>
    );
}

export default Detail