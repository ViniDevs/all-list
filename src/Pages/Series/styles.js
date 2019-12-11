import styled from 'styled-components';

export const Article = styled.div`
   display:flex;
   flex-direction: column;
   justify-content: space-evenly;
   margin-top: 100px;
   height: 100%;

   list-style: none;
`;

export const Header = styled.div`
  flex-direction: column;


  p{
      width: 600px;
  }

  img{
      border-radius: 50%;
      height: 70px;
      width: 70px;
  }

`;
