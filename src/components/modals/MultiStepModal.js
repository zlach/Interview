import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FirstStep from '../modals/steps/FirstStep';
import SecondStep from '../modals/steps/SecondStep';


const MultiStepModal = (props) => {
    const [formData, setFormData] = useState({
        propertyType: '',
        propertyNickname: '',
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        floors: '',
        bedrooms: '',
        baths: ''
    });
    const [stepCount, setStepCount] = useState(1);

    const handleInputField = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div>
            <Modal isOpen={props.isOpen} toggle={props.toggle} backdrop={false}>
                <ModalHeader toggle={props.toggle}>{stepCount === 1 ? 'Add Property' : 'Add Property Details'}</ModalHeader>
                <ModalBody>
                    <FirstStep
                        step={stepCount}
                        nextStep={() => setStepCount(2)}
                        inputHandler={handleInputField}
                        propertyTypeValue={formData.propertyType}
                        propertyNicknameValue={formData.propertyNickname}
                        streetAddress1Value={formData.streetAddress1}
                        streetAddress2Value={formData.streetAddress2}
                        cityValue={formData.city}
                        stateValue={formData.state}
                        zipCodeValue={formData.zipCode}
                    />
                    <SecondStep
                        step={stepCount}
                        previousStep={() => setStepCount(1)}
                        inputHandler={handleInputField}
                        floorsValue={formData.floors}
                        bedroomsValue={formData.bedrooms}
                        bathsValue={formData.baths}
                    />
                </ModalBody>
            </Modal>
        </div>
    );
}

export default MultiStepModal;