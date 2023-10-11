import {
    Modal as RBModal
} from 'react-bootstrap'

import Button from './Button'

const Modal = ({
    show,
    title,
    body,
    onClose
}) => {

    return (
        <>
            <RBModal show={show} onHide={() => {
                // sadece kapama
                onClose()
            }}>
                <RBModal.Header closeButton>
                    <RBModal.Title>{title}</RBModal.Title>
                </RBModal.Header>
                <RBModal.Body>{body}</RBModal.Body>
                <RBModal.Footer>
                    <Button title="Kapat" variant="secondary" onClick={() => {
                        // sadece kapama
                        onClose()
                    }} />
                    <Button title="Sil" variant="danger" onClick={() => {
                        // kapat ve aksiyon
                        // konfirme
                        onClose(true)
                    }} />
                </RBModal.Footer>
            </RBModal>
        </>
    )
}

export default Modal