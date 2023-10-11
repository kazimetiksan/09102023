import {
    Modal as RBModal
} from 'react-bootstrap'

import Button from './Button'

const Modal = ({
    show,
    title,
    body
}) => {

    return (
        <>
            <RBModal show={show} onHide={() => {
                
            }}>
                <RBModal.Header closeButton>
                    <RBModal.Title>{title}</RBModal.Title>
                </RBModal.Header>
                <RBModal.Body>{body}</RBModal.Body>
                <RBModal.Footer>
                    <Button title="Kapat" variant="secondary" onClick={() => {

                    }} />
                    <Button title="Sil" variant="danger" onClick={() => {

                    }} />
                </RBModal.Footer>
            </RBModal>
        </>
    )
}

export default Modal