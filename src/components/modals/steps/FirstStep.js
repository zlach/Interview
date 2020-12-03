import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FirstStep = (props) => {

    const [alerts, setAlerts] = useState({
        streetAddress1: '',
        city: '',
        zipCode: ''
    });

    const clearAlert = (e) => {
        setAlerts({ ...alerts, [e.target.name]: '' })
    }

    const handleNext = () => {
        if (props.streetAddress1Value && props.cityValue && props.zipCodeValue) {
            props.nextStep();
        } else if (!props.streetAddress1Value) {
            setAlerts({ ...alerts, streetAddress1: 'is-invalid' })
        } else if (!props.cityValue) {
            setAlerts({ ...alerts, city: 'is-invalid' })
        } else if (!props.zipCodeValue) {
            setAlerts({ ...alerts, zipCode: 'is-invalid' })
        }
    }

    if (props.step !== 1) {
        return null;
    }
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="propertyType">Property Type</Label>
                    <Input type="select" name="propertyType" id="propertyType" onChange={props.inputHandler} value={props.propertyTypeValue}>
                        <option>Single Family House</option>
                        <option>Apartment</option>
                        <option>Condominium</option>
                        <option>Townhome</option>
                        <option>Manufactured</option>
                        <option>Land</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="propertyNickname">Property Nickname - optional</Label>
                    <Input type="text" name="propertyNickname" id="propertyNickname" placeholder="Nickname" onChange={props.inputHandler} value={props.propertyNicknameValue} />
                </FormGroup>
                <FormGroup>
                    <Label for="streetAddress1">Street Address</Label>
                    <Input className={alerts.streetAddress1} type="text" name="streetAddress1" id="streetAddress1" placeholder="Address 1" onChange={(e) => { props.inputHandler(e); clearAlert(e) }} value={props.streetAddress1Value} />
                    <div className="invalid-feedback">
                        Please Enter Address
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="streetAddress2">Street Address Cont.</Label>
                    <Input type="text" name="streetAddress2" id="streetAddress2" placeholder="Address 2" onChange={props.inputHandler} value={props.streetAddress2Value} />
                </FormGroup>
            </Form>
            <Form className='d-flex'>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input className={alerts.city} type="text" name="city" id="city" placeholder="City" onChange={(e) => { props.inputHandler(e); clearAlert(e) }} value={props.cityValue} />
                    <div className="invalid-feedback">
                        Please Enter City
                    </div>
                </FormGroup>
                <FormGroup className='px-2'>
                    <Label for="state">State</Label>
                    <Input type="select" name="state" id="state" onChange={props.inputHandler} value={props.stateValue} >
                        <option>DC</option>
                        <option>MD</option>
                        <option>TX</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="zipCode">Zip Code</Label> {/*todo: remove arrows from input*/}
                    <Input className={alerts.zipCode} type="number" name="zipCode" id="zipCode" placeholder="Zip" onChange={(e) => { props.inputHandler(e); clearAlert(e) }} value={props.zipCodeValue} />
                    <div className="invalid-feedback">
                        Please Enter Zip
                    </div>
                </FormGroup>
            </Form>
            <Button className='w-100' color="primary" onClick={handleNext}>Next</Button>
            <div className="d-flex justify-content-center w-100 mt-3">
                <div className="progress-active mr-1"></div>
                <div className="progress-inactive ml-1"></div>
            </div>
        </div>
    )
}

export default FirstStep;