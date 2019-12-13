import styled from 'styled-components';

export const SerieLists = styled.div`
   display:flex;
   justify-content: space-evenly;
   flex-wrap:wrap;
   margin-top: 100px;
   height: 100%;

   list-style: none;
`;

export const Header = styled.div`
  flex-direction: column;
  padding-left: 10px;
  padding-bottom: 10px;

  text-align: center;

  h3{
      font-size: 30px;
      font-weight: bold;
  }
  p{
      width: 300px;
      font-size: 10px;
  }

  img{
      height: 350px;
      width: 300px;
  }

`;
