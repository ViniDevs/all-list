import React from 'react';
import {Nav} from './styles';
import SocialLink from './styles'


const Navbar = () =>(
  <Nav>
      <SocialLink to ='/'>All List</SocialLink>
      <ul>
          <li className='login'>Login</li>
          <li className='btn'>Register</li>
     </ul>
</Nav>

);

export default Navbar;

