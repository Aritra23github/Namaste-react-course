import { useState } from "react";
import { Link } from 'react-router-dom';
import { Card, Button, Nav, Navbar, Container } from "react-bootstrap";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();

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
                            <li
                                style={{paddingLeft: '20px', paddingRight: '20px', cursor: 'pointer'}}
                            >
                                Online Status : { onlineStatus ?  '✅' : '🔴'}
                            </li>
                            <li 
                                style={{paddingLeft: '20px', paddingRight: '20px', cursor: 'pointer'}}
                            >
                                <Link to='/' style={{textDecoration: 'none', color: 'black'}}>Home</Link>
                            </li>
                            <li 
                                style={{paddingLeft: '20px', paddingRight: '20px', cursor: 'pointer'}}
                            >
                                <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>Contact</Link>
                            </li>
                            <li 
                                style={{paddingLeft: '20px', paddingRight: '20px', cursor: 'pointer'}}
                            >
                                <Link style={{textDecoration: 'none', color: 'black'}} to='/about'>About</Link>
                            </li>
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={
                                    () => btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                                }
                            >
                                {btnName}
                            </button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;