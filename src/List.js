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

import axios from "axios"

const dummy = [{
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

const List = () => {

    const [userList, setUserList] = useState([])

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
        console.log('new user güncellendi', newUser)
    }, [newUser])

    const setUserInput = (key, value) => {

        setNewUser({
            ...newUser,
            [key]: value
        })
    }

    const getData = () => {

        const url = 'https://reactpm.azurewebsites.net/api/users'

        setLoading(true)

        axios.get(url)
            .then((response) => {
                console.log('response', response.data)

                // state set
                setUserList(response.data)

                // setTimeout(() => {
                setLoading(false)
                // }, 2000)
            })
            .catch((error) => {
                console.log('error', error)
                setLoading(false)
            })
    }

    useEffect(() => {

        getData()
    }, [])

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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList.map((item, index) => {

                                        return (
                                            <Row
                                                key={index}
                                                data={item}
                                                index={index}
                                                onChange={(updateId) => {
                                                    console.log('güncellenecek satır', updateId)

                                                    setUpdateIndex(updateId)

                                                    setNewUser(userList[updateId])
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

                        // API EKLE

                        setLoading(true)

                        const url = 'https://reactpm.azurewebsites.net/api/user'
                        axios.post(url, newUser)
                            .then((response) => {
                                console.log('user eklendi', response.data)

                                setUserList([
                                    ...userList,
                                    response.data
                                ])
                                setLoading(false)
                            })
                            .catch((error) => {
                                console.log('error', error)
                            })

                    } else {
                        // API GÜNCELLE

                        const _id = userList[updateIndex]._id
                        const url = `https://reactpm.azurewebsites.net/api/user/${_id}`

                        axios.patch(url, newUser)
                            .then((response) => {

                                console.log('user güncellendi', response.data)

                                const updatedList = userList.map((item) => {

                                    if (item._id === _id) {
                                        return response.data
                                    } else {
                                        return item
                                    }
                                })

                                setUserList(updatedList)
                                setLoading(false)
                            })
                            .catch((error) => {
                                console.log('error', error)
                            })
                    }

                    setNewUser(newUserTemplate)

                }} />
            </div>
            <Modal
                show={modalOn}
                title="Uyarı"
                body="Satır sinilecektir, emin misin ?"
                onClose={(confirmed = false) => {
                    setModalOn(false)

                    if (removalIndex !== -1 && confirmed) {

                        const _id = userList[removalIndex]._id
                        const url = `https://reactpm.azurewebsites.net/api/user/${_id}`

                        setLoading(true)

                        axios.delete(url, newUser)
                            .then((response) => {

                                console.log('user silindi')

                                if (response.status === 200) {
                                    // silme işlemi başarılı

                                    const filteredList = userList.filter((user) => user._id !== _id)
                                    setUserList(filteredList)
                                }

                                setLoading(false)
                            })
                            .catch((error) => {
                                console.log('error', error)
                            })

                        setRemovalIndex(-1)
                    }
                }}
            />
        </>
    )
}

export default List