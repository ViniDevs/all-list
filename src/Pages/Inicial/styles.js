import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled.div`
   display:flex;
   justify-content: space-evenly;
   margin-top: 100px;
   height: 500px;
   max-height: 100%;

   p{
       color: black;
       font-weight:bold;

       text-align: center;

       height: 30px;

       display:flex;
       justify-content: center;
       align-items:center;

   }

`;

const SocialLink = styled(Link)`
   text-decoration: none;
   background: #363636;
   height: 350px;
   width: 300px;

   color: #FFF;

   display:flex;
   justify-content:center;
   align-items:center;

   font-size:40px;
`;
export default SocialLink;

