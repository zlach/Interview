import { useState } from 'react';
import { Button, Container, Row, Table } from 'reactstrap';
import MultiStepModal from '../modals/MultiStepModal';

const PropertyTable = () => {
    const [modal, setModal] = useState(false);
    const [properties, setProperties] = useState([]);

    const addProperty = (property) => {
        setProperties([...properties, property]);
    }

    return (
        <Container>
            <Row className="my-5">
                <h2 className="d-inline">My Properties</h2>
                <Button className="d-inline text-uppercase ml-3" color="primary" onClick={() => setModal(!modal)}>Add Property</Button>
                {modal ? <MultiStepModal isOpen={modal} toggle={() => setModal(!modal)} addProperty={addProperty} /> : null}
            </Row>
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <th>Property Address</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {properties.map((property, i) => {
                            return (
                                <tr>
                                    <td>{property.streetAddress1}</td>
                                    <td>{property.city}</td>
                                    <td>{property.state}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default PropertyTable;