import Row from "./Row"
import {
    useState,
    useEffect
} from 'react'

import Button from "./Button"

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
                                        onRemove={(removalId) => {
                                            console.log('satır silinecek', removalId)

                                            // array removalId indexi silinecek
                                            const filteredList = userList.filter((user, userIndex) => removalId !== userIndex)

                                            setUserList(filteredList)
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
                <Button title="Ekle" onClick={() => {

                    setUserList([
                        ...userList,
                        newUser
                    ])

                    setNewUser(newUserTemplate)
                }} />
            </div>
        </>
    )
}

export default List