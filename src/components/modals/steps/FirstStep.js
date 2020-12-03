import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FirstStep = (props) => {
    if(props.step !== 1){
        return null;
    }
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
            </Form>
        </div>
    )
}

export default FirstStep;