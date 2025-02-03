import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AdminNavbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* Logo - Computer Seekho */}
          <Navbar.Brand href="#home" style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
            Computer Seekho
          </Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link href="#FollowUp">Follow Up</Nav.Link>
            <Nav.Link href="#AddEnquiry">Add Enquiry</Nav.Link>
            <Nav.Link href="#Table">Table</Nav.Link>
            <Nav.Link href="#Student" style={{ color: 'red' }}>Student</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;