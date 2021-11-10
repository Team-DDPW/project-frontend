import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from '../components/Post';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import { useAuth } from '../contexts/auth';
import { RiLogoutBoxFill } from 'react-icons/ri';

function Header() {
  const { user, logout } = useAuth();

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
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {user ? (
                <>
                  <Nav.Link href="/logout">
                    <RiLogoutBoxFill>
                      <LogoutButton />
                    </RiLogoutBoxFill>
                  </Nav.Link>

                  <Nav.Link href="/listings">
                    <Button variant="outlined">
                      <Link href="/listings" variant="body2">
                        Listings
                      </Link>
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/signin">
                    <FaUser size={56} />
                  </Nav.Link>

                  
                    <Post />
                  
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
