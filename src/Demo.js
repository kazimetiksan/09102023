import {
    useState // hook
} from 'react'

const Demo = () => {

    let x = 10
    let y = 10

    const [value, setValue] = useState(x)
    const [valueY, setValueY] = useState(y)
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: ""
    })

    // const getter = stateArray[0]
    // const setter = stateArray[1]

    // const [getter, setter] = stateArray

    return (
        <>
            <div>Değer: {value}</div>
            <div>
                <button onClick={() => {
                    
                    setValue(value+1)

                    console.log('value değeri güncellendi', value)

                }}>Arttır</button>
            </div>
        </>
    )
}

export default Demo