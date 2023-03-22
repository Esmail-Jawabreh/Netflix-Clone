import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'


function NavBar() {
    return (
        <Navbar className='nav'>
            <Container>
                <Navbar.Brand href="/">Netflix</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/"      >Home</Nav.Link>
                    <Nav.Link href="FavList">Favourite Movies</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;