import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Your Brand</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="Mega Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        {/* Add other menu items here */}
      </Nav>
      {/* Add additional elements if needed */}
    </Navbar.Collapse>
  </Navbar>
}

export default Header;
