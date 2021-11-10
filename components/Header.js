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

function Header() {
  const { user, logout } = useAuth();

  console.log('User from Header', user);

  return (
    <Navbar bg="primary" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/">FastEx</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 ">
              {user ? (
                <>
                  <LogoutButton className="menubtn" />
                  <Button variant="primary" className="menubtn">
                    <Link href="/listings">Listings</Link>
                  </Button>
                  <Post />
                </>
              ) : (
                <Nav.Link href="/signin">
                  <Button variant="primary">
                    <Link href="/signin">Signin</Link>
                  </Button>
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
