import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Nav, NavItem } from 'reactstrap';

const SignedOutLinks = () => {
  return (
        <Nav>
          <NavItem>
            <NavLink to="/auth/login" className="nav-link">
              <Button color="primary">
                Login
              </Button>
            </NavLink>
          </NavItem>
        </Nav>
  )
}

export default SignedOutLinks
