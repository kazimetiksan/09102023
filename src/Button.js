const Button = ({
    title,
    onClick
}) => {

    return (
        <button onClick={() => {

            // log analytics
            

            onClick()
        }}>{title}</button>
    )
}

export default Button