import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SecondStep = (props) => {
    if (props.step !== 2) {
        return null;
    }
    return (
        <div>
            <Form className='d-flex'>
                <FormGroup>
                    <Label for="floors">Floors - optional</Label>
                    <Input type="number" name="floors" id="floors" onChange={props.inputHandler} value={props.floorsValue} />
                </FormGroup>
                <FormGroup className='px-2'>
                    <Label for="bedrooms">Bedrooms - optional</Label>
                    <Input type="number" name="bedrooms" id="bedrooms" onChange={props.inputHandler} value={props.bedroomsValue} />
                </FormGroup>
                <FormGroup>
                    <Label for="baths">Baths - optional</Label> {/*todo: add icon*/}
                    <Input type="number" name="baths" id="baths" onChange={props.inputHandler} value={props.bathsValue} />
                </FormGroup>
            </Form>
            <div className="d-flex justify-content-center w-100">
                <Button className='mr-2 w-50' color="primary" onClick={props.previousStep}>Previous</Button>
                <Button className='ml-2 w-50' color="primary" onClick={null}>Save and Close</Button>
            </div>
            <div className="d-flex justify-content-center w-100 mt-3">
                <div className="progress-inactive mr-1"></div>
                <div className="progress-active ml-1"></div>
            </div>
        </div>
    )
}

export default SecondStep;