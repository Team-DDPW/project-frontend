import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../contexts/auth';

function LogoutButton() {
  const { logout } = useAuth();
  return (
    <Button variant="text" onClick={logout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
