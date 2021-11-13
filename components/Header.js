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

  return (
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

          {user ? (
            <Navbar.Brand>
              <Post />
            </Navbar.Brand>
          ) : (
            ''
          )}
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
