import Row from "./Row"
import {
    useState
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
                <input placeholder="Ad" onChange={(e) => {
                    console.log('user input', e)
                }} />
            </div>
            <div>
                <input placeholder="Soyad" onChange={(e) => {
                    console.log('user input', e)
                }} />
            </div>
            <div>
                <Button />
            </div>
        </>
    )
}

export default List