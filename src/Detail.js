import {
    useParams
} from 'react-router-dom'

const Detail = () => {

    const {_id} = useParams()
    console.log('detail id', _id)

    return (
        <div style={{
            margin: 20
        }}>Detay Sayfası {_id}</div>
    );
}

export default Detail