import React from 'react'
import { NavLink } from 'react-router-dom'
import {Button, Nav} from 'reactstrap';

const SignedOutLinks = () => {
  return (
        <Nav>
            <Button color="primary"><NavLink to='/signup'>Signup</NavLink></Button>{' '}
            <Button color="primary"><NavLink to='/signin'>Login</NavLink></Button>
        </Nav>
  )
}

export default SignedOutLinks