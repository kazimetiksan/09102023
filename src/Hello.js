const Hello = ({
    data,
    title="Sayın"
}) => {

    console.log('hello props', data)

    return (
      <div>Merhaba {title} {data.name}</div>
    )
}

export default Hello

// Javascript ES6