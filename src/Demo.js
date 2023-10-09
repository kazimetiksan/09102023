const Demo = () => {

    let x = 10

    return (
        <>
            <div>Değer: {x}</div>
            <div>
                <button onClick={() => {
                    x += 1

                    console.log('x değeri güncellendi', x)

                }}>Arttır</button>
            </div>
        </>
    )
}

export default Demo