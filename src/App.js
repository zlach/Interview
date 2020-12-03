import { Fragment } from 'react';
import './App.css';
import PropertyTable from './components/pages/PropertyTable';
import Person from './components/icons/Person';
import { Navbar} from 'reactstrap';

function App() {
  return (
    <Fragment>
      <Navbar className="custom-navbar">
        <Person/>
      </Navbar>
      <PropertyTable />
    </Fragment>
  );
}

export default App;
