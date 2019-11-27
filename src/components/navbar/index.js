import React from 'react';
import {Nav} from './styles';

const Navbar = () =>(
  <Nav>
      <h1>Lista Tudo</h1>

      <ul>
          <li className='login'>Login</li>
          <li className='btn'>Cadastre-se</li>
     </ul> 
</Nav>
    

);

export default Navbar;

