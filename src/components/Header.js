import { Card, Button, Nav, Navbar, Container } from "react-bootstrap";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">    
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={LOGO_URL}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Food Ordering Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end">
                            <Nav.Link href="#offers">Offers</Nav.Link>
                            <Nav.Link href="#help">Help</Nav.Link>
                            <Nav.Link href="#cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;