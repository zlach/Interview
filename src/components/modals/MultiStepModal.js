import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FirstStep from '../modals/steps/FirstStep';


const MultiStepModal = (props) => {
    const [stepCount, setStepCount] = useState(1);

    return (
        <div>
            <Modal isOpen={props.isOpen} toggle={props.toggle} backdrop={false}>
                <ModalHeader toggle={props.toggle}>Add Property</ModalHeader>
                <ModalBody>
                    <FirstStep step={stepCount} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                    <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default MultiStepModal;