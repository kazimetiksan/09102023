const Hello = (props) => {

    console.log('hello props', props)

    return (
      <div>Merhaba {props.data.name}</div>
    )
}

export default Hello

// Javascript ES6