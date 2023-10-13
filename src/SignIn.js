import { useState } from 'react'
import {
    Form
} from 'react-bootstrap'

import Button from './Button'

import { signIn } from './redux/dispatch'

const SignIn = () => {

    const userTemplate = {
        email: "",
        password: ""
    }
    const [userInfo, setUserInfo] = useState(userTemplate)

    return (
        <div style={{
            margin: 20
        }}>
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
            <Button title="Giriş Yap" onClick={() => {
                console.log('new user', userInfo)

                // redux async api
                signIn({
                    callback: () => {
                        // navigate
                    },
                    userInfo
                })
            }} />
        </div>
    )
}

export default SignIn