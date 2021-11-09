import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from '../components/Post';
import Image from 'next/image';
import { Button } from '@mui/material';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">FastEx</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Button>
                <Link href="/signin" variant="body2">
                  Login
                </Link>
              </Button>
              <LogoutButton />
              <Post />
              <Navbar.Brand href="/signin">
                <FaUser />
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
