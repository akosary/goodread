import { useState } from'react';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function UserNavbar() {
  const [authenticated, setAuthenticated] = useState(false);
  const handleLogin = () => {
    setAuthenticated(true);
    
  };

  const handleLogout = () => {
    setAuthenticated(false);
    
  };
  return (
    <>
      <Navbar bg="dark"  variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">ICON</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="#home"    className="mr-3">Home</Nav.Link>
            <Nav.Link href="#pricing" className="mr-3">Categories</Nav.Link>
            <Nav.Link href="#pricing" className="mr-3">Books</Nav.Link>
            <Nav.Link href="#pricing" className="mr-3">Authors</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mr-3"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {authenticated ? (
            <>
              <Nav.Link href="#profile"> John Doe!</Nav.Link>
              <Nav.Link href="#profile"><img src="your-image-url" alt="John Doe" /></Nav.Link>
            </>
          ) : (
            <></>
          )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
      
    </>
  );
}

export default UserNavbar;