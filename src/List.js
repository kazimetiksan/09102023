import Row from "./Row"
import {
    useState,
    useEffect
} from 'react'

import Button from "./Button"

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

    return (
        <>
            <div>User List</div>
            <div>
            {
                userList.map((item, index) => {

                    return (
                        <Row key={index} data={item} />
                    )
                }) // arrow function
            }
            </div>
            <div>
                <input placeholder="Ad" value={newUser.firstName} onChange={(e) => {

                    const firstName = e.target.value
                    // console.log('user input', firstName)

                    setNewUser({
                        ...newUser,
                        firstName
                    })
                }} />
            </div>
            <div>
                <input placeholder="Soyad" value={newUser.lastName} onChange={(e) => {

                    const lastName = e.target.value
                    // console.log('user input', lastName)

                    setNewUser({
                        ...newUser,
                        lastName
                    })
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