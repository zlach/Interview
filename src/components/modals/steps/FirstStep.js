import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FirstStep = (props) => {
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
                    <Input type="text" name="streetAddress1" id="streetAddress1" placeholder="Address 1" onChange={props.inputHandler} value={props.streetAddress1Value} />
                </FormGroup>
                <FormGroup>
                    <Label for="streetAddress2">Street Address Cont.</Label>
                    <Input type="text" name="streetAddress2" id="streetAddress2" placeholder="Address 2" onChange={props.inputHandler} value={props.streetAddress2Value} />
                </FormGroup>
            </Form>
            <Form className='d-flex'>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input type="text" name="city" id="city" placeholder="City" onChange={props.inputHandler} value={props.cityValue} />
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
                    <Label for="zipCode">Zip Code</Label>
                    <Input type="number" name="zipCode" id="zipCode" placeholder="Zip" onChange={props.inputHandler} value={props.zipCodeValue} />
                </FormGroup>
            </Form>
        </div>
    )
}

export default FirstStep;