import Button from "./Button"

const Row = ({
    data,
    index,
    onRemove,
    onChange
}) => {

    return (
        <>
            <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.age}</td>
                <td>
                    <Button title="Güncelle" onClick={() => {
                        onChange(index)
                    }} />
                </td>
                <td>
                    <Button variant="danger" title="Sil" onClick={() => {
                        onRemove(index)
                    }} />
                </td>
            </tr>
        </>
    )
}

export default Row

{/* <div style={{
    marginTop: 20
}}>{data.firstName} {data.lastName}</div> */}
