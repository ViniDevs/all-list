import styled from 'styled-components';

export const Article = styled.div`
   display:flex;
   justify-content: space-evenly;
   margin-top: 100px;
   height: 500px;
   max-height: 100%;

  div{
      background: #363636;
      height: 350px;
      width: 300px;   

      color: #FFF;

      display:flex;
      justify-content:center;
      align-items:center;

      font-size:40px;
   
  }

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