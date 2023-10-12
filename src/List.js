import Row from "./Row"
import {
    useState,
    useEffect
} from 'react'

import Button from "./Button"

import Modal from "./Modal"

import {
    Table,
    Spinner
} from 'react-bootstrap'

import {
    useNavigate
} from 'react-router-dom'

import {
    useRedux
} from './redux/hooks'

import { 
    addNew, 
    getAll, 
    update, 
    remove
} from "./redux/dispatch"

const List = () => {

    const {users} = useRedux()

    // console.log('redux users', users)

    const navigate = useNavigate()

    const newUserTemplate = {
        firstName: '',
        lastName: '',
        age: '42'
    }
    const [newUser, setNewUser] = useState(newUserTemplate)

    const [updateIndex, setUpdateIndex] = useState(-1)

    const [modalOn, setModalOn] = useState(false)
    const [removalIndex, setRemovalIndex] = useState(-1)

    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        // console.log('new user güncellendi', newUser)
    }, [newUser])

    useEffect(() => {

        setLoading(true)
        getAll({
            callback: () => {
                setLoading(false)
            }
        })
    }, [])

    const setUserInput = (key, value) => {

        setNewUser({
            ...newUser,
            [key]: value
        })
    }

    return (
        <>
            <div>
                {
                    isLoading ? (
                        <Spinner animation="border" variant="warning" />
                    ) : (
                        <Table>
                            <thead>
                                <tr>
                                    <th>AD</th>
                                    <th>SOYAD</th>
                                    <th>EMAIL</th>
                                    <th>YAŞ</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item, index) => {

                                        return (
                                            <Row
                                                key={index}
                                                data={item}
                                                index={index}
                                                onView={(viewIndex) => {

                                                    const _id = users[viewIndex]._id

                                                    const targetURL = `/view/${_id}`
                                                    console.log(targetURL)

                                                    navigate(targetURL)
                                                }}
                                                onChange={(updateId) => {
                                                    console.log('güncellenecek satır', updateId)

                                                    setUpdateIndex(updateId)

                                                    setNewUser(users[updateId])
                                                }}
                                                onRemove={(removalId) => {
                                                    console.log('satır silinecek', removalId)

                                                    setModalOn(true)
                                                    setRemovalIndex(removalId)
                                                }}
                                            />
                                        )
                                    }) // arrow function
                                }
                            </tbody>
                        </Table>
                    )
                }
            </div>
            <div>
                <input placeholder="Ad" value={newUser.firstName} onChange={(e) => {

                    setUserInput('firstName', e.target.value)
                }} />
            </div>
            <div>
                <input placeholder="Soyad" value={newUser.lastName} onChange={(e) => {

                    setUserInput('lastName', e.target.value)
                    // const lastName = e.target.value
                    // setNewUser({
                    //     ...newUser,
                    //     lastName
                    // })
                }} />
            </div>
            <div>
                <Button title={updateIndex === -1 ? "Ekle" : "Güncelle"} onClick={() => {

                    if (updateIndex === -1) {
                        // ekle
                        setLoading(true)
                        addNew({
                            callback: () => {
                                setLoading(false)
                                setNewUser(newUserTemplate)
                            },
                            newUser
                        })
                    } else {
                        // güncelle

                        const _id = users[updateIndex]._id

                        setLoading(true)
                        update({
                            callback: () => {
                                setLoading(false)
                                setNewUser(newUserTemplate)
                            },
                            newUser,
                            _id
                        })
                    }
                }} />
            </div>
            <Modal
                show={modalOn}
                title="Uyarı"
                body="Satır sinilecektir, emin misin ?"
                onClose={(confirmed = false) => {
                    setModalOn(false)

                    if (removalIndex !== -1 && confirmed) {

                        const _id = users[removalIndex]._id

                        remove({
                            callback: () => {

                            },
                            _id
                        })

                        // setLoading(true)
                        setRemovalIndex(-1)
                    }
                }}
            />
        </>
    )
}

export default List