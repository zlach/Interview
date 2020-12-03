import { useState } from 'react';
import { Button, Container, Row } from 'reactstrap';
import MultiStepModal from '../modals/MultiStepModal';

const Table = () => {
    const [modal, setModal] = useState(false);
    return (
        <Container>
            <Row>
                <h2 className="d-inline">My Properties</h2>
                <Button className="d-inline text-uppercase ml-3" color="primary" onClick={() => setModal(!modal)}>Add Property</Button>
                <MultiStepModal isOpen={modal} toggle={() => setModal(!modal)} />
            </Row>
        </Container>
    )
}

export default Table;