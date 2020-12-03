import { Fragment } from 'react';
import './App.css';
import Table from './components/pages/Table';
import Person from './components/icons/Person';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function App() {
  return (
    <Fragment>
      <Navbar className="custom-navbar">
        <Person/>
      </Navbar>
      <Table />
    </Fragment>
  );
}

export default App;
