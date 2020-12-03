import React, { useState } from 'react';
import { Spinner, Modal, ModalHeader, ModalBody } from 'reactstrap';
import FirstStep from '../modals/steps/FirstStep';
import SecondStep from '../modals/steps/SecondStep';
import { postProperty } from '../../services/api';


const MultiStepModal = (props) => {
    const [spinner, setSpinner] = useState(false);
    const [formData, setFormData] = useState({
        propertyType: 'Single Family House',
        propertyNickname: '',
        streetAddress1: '',
        streetAddress2: '',
        city: '',
        state: 'DC',
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

    const saveAndClose = async () => {
        setSpinner(true);
        let property = JSON.stringify({ ...formData });
        let response = await postProperty(property);
        setSpinner(false);
        props.addProperty(response);
        props.toggle();
    }

    return (
        <div style={{ position: 'relative' }}>
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
                        saveAndClose={saveAndClose}
                        inputHandler={handleInputField}
                        floorsValue={formData.floors}
                        bedroomsValue={formData.bedrooms}
                        bathsValue={formData.baths}
                    />
                </ModalBody>
                {spinner ? <div className="spinner-overlay d-flex align-items-center justify-content-center">
                    <Spinner color="white" />
                </div> : null}
            </Modal>

        </div>
    );
}

export default MultiStepModal;