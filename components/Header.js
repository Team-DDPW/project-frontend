import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from '../components/Post';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { useAuth } from '../contexts/auth';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';

function Header() {
  const { user, logout } = useAuth();

  console.log('User from Header', user);

  return (
    // <Navbar bg="primary" expand={false}>
    //   <Container fluid>
    //     <Navbar.Brand >
    //       <Link href="/" className='textcolor'>FastEx</Link>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="offcanvasNavbar" />
    //     <Navbar.Offcanvas
    //       id="offcanvasNavbar"
    //       aria-labelledby="offcanvasNavbarLabel"
    //       placement="end"
    //     >
    //       <Offcanvas.Header closeButton></Offcanvas.Header>
    //       <Offcanvas.Body>
    //         <Nav className="justify-content-end flex-grow-1 pe-3 ">
    //           {user ? (
    //             <>
    //               <LogoutButton className="menubtn" />
    //               <Button className="menubtn">
    //                 <Link href="/listings">Listings</Link>
    //               </Button>
    //               <Post />
    //             </>
    //           ) : (
    //             <Nav.Link href="/signin">
    //               <Button variant="primary">
    //                 <Link href="/signin">Signin</Link>
    //               </Button>
    //             </Nav.Link>
    //           )}
    //         </Nav>
    //       </Offcanvas.Body>
    //     </Navbar.Offcanvas>
    //   </Container>
    // </Navbar>

    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <p style={{ color: 'white', fontWeight: 'bold' }}>FastEx</p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          {/* <Navbar.Brand>
            <RiMessengerLine size={28} />
          </Navbar.Brand>
          <Navbar.Brand>
            <MdOutlineNotificationsActive size={28} />
          </Navbar.Brand> */}
          <Nav>
            <NavDropdown
              title={<FaUserAlt size={28} />}
              id="collasible-nav-dropdown"
            >
              {user ? (
                <>
                  <NavDropdown.Item>
                    <Button variant="text">
                      <Link href="/listings">Listings</Link>
                    </Button>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Post />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <LogoutButton className="menubtn" />
                  </NavDropdown.Item>
                </>
              ) : (
                <NavDropdown.Item>
                  <Button variant="text">
                    <Link href="/signin">Signin</Link>
                  </Button>
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
