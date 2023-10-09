import {
    Button as RBButton
} from 'react-bootstrap'

const Button = ({
    title,
    onClick,
    variant="primary"
}) => {

    return (

        <RBButton variant={variant} onClick={onClick}>
            {title}
        </RBButton>

        // <button onClick={() => {

        //     // log analytics
            

        //     onClick()
        // }}>{title}</button>
    )
}

export default Button