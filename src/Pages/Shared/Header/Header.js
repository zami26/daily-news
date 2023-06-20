import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
    const { user, LogOut } = useContext(AuthContext);
    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(error => console.error('error', error))
    }
    return (
        <Navbar bg="light" expand="lg" className='mb-3'>
            <Container>
                <Navbar.Brand><Link to='/'>Daily News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        {user?.displayName}
                                        <Button variant="light" onClick={handleLogOut}>Logout</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login' className='me-2 btn btn-light'>Login</Link>
                                        <Link to='/register' className='btn btn-light'>Register</Link>
                                    </>
                            }
                        </>
                        <Link to='/profile'>
                            {
                                user?.photoURL ?
                                    <Image
                                        roundedCircle
                                        src={user.photoURL}
                                        style={{ height: '30px' }}
                                    ></Image>
                                    : <FaUser></FaUser>
                            }
                        </Link>

                    </Nav>

                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;