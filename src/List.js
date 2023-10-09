import Row from "./Row"

const List = () => {

    const userList = [{
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
      }]

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
        </>
    )
}

export default List