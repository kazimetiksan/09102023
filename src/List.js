import Row from "./Row"
import {
    useState,
    useEffect
} from 'react'

import Button from "./Button"

import Modal from "./Modal"

// import DatePicker from "react-date-picker"
// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';

import {
    Table
} from 'react-bootstrap'

const List = () => {

    const [userList, setUserList] = useState([{
        firstName: 'Mehmet',
        lastName: 'Etiksan',
        age: 44
      },{
        firstName: 'Hakan',
        lastName: 'Demir',
        age: 42
      },{
        firstName: 'Elif',
        lastName: 'Tekin',
        age: 46
      }])

    const newUserTemplate = {
        firstName: '',
        lastName: '',
        age: ''
    }
    const [newUser, setNewUser] = useState(newUserTemplate)

    const [updateIndex, setUpdateIndex] = useState(-1)

    const [modalOn, setModalOn] = useState(false)
    const [removalIndex, setRemovalIndex] = useState(-1)

    useEffect(() => {
        console.log('new user güncellendi', newUser)
    }, [newUser])

    const setUserInput = (key, value) => {

        setNewUser({
            ...newUser,
            [key]: value
        })
    }

    // const [date, setDate] = useState(new Date())
    // moment

    return (
        <>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>AD</th>
                            <th>SOYAD</th>
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

                                            // array removalId indexi silinecek
                                            // const filteredList = userList.filter((user, userIndex) => removalId !== userIndex)
                                            // setUserList(filteredList)
                                        }} 
                                    />
                                )
                            }) // arrow function
                        }
                    </tbody>
                </Table>
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
                        // EKLE
                        setUserList([
                            ...userList,
                            newUser
                        ])
    
                    } else {    
                        // GÜNCELLE

                        const updatedList = userList.map((item, index) => {

                            if (index === updateIndex) {
                                return newUser
                            } else {
                                return item
                            }

                        })

                        setUserList(updatedList)
                        setUpdateIndex(-1)
                    }

                    setNewUser(newUserTemplate)

                }} />
            </div>
            <Modal 
                show={modalOn} 
                title="Uyarı" 
                body="Satır sinilecektir, emin misin ?"
                onClose={(confirmed=false) => {
                    setModalOn(false)

                    if (removalIndex !== -1 && confirmed) {
                        const filteredList = userList.filter((user, userIndex) => removalIndex !== userIndex)
                        setUserList(filteredList)

                        setRemovalIndex(-1)
                    }
                }}
            />
        </>
    )
}

export default List