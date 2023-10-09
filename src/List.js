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
            <div>Kullanıcı Listesi</div>
            <div>
            {
                userList.map((item, index) => {

                    return (
                        <div>{item.firstName} {item.lastName}</div>
                    )
                }) // arrow function
            }
            </div>
        </>
    )
}

export default List