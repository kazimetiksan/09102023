import { useState } from 'react'
import {
    Form
} from 'react-bootstrap'

const SignUp = () => {

    const userTemplate = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const [userInfo, setUserInfo] = useState(userTemplate)

    return (
        <>
            <Form.Control placeholder='Ad' value={userInfo.firstName} onChange={(e) => {
                const firstName = e.target.value
                setUserInfo({
                    ...userInfo,
                    firstName
                })
            }} />
            <Form.Control placeholder='Soyad' value={userInfo.lastName} onChange={(e) => {
                const lastName = e.target.value
                setUserInfo({
                    ...userInfo,
                    lastName
                })
            }} />
            <Form.Control placeholder='Email' value={userInfo.email} onChange={(e) => {
                const email = e.target.value
                setUserInfo({
                    ...userInfo,
                    email
                })
            }} />
            <Form.Control placeholder='Password' value={userInfo.password} onChange={(e) => {
                const password = e.target.value
                setUserInfo({
                    ...userInfo,
                    password
                })
            }} />
        </>
    )
}

export default SignUp