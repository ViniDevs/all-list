import styled from 'styled-components';

export const MovieLists = styled.div`
   display:flex;
   justify-content: space-evenly;
   flex-wrap:wrap;
   margin: 100px 0;
   height: 100%;
   list-style: none;


   .post:hover{
    -webkit-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.3);
    box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.3);
   }

   .post{
    flex-direction: column;
    padding: 20px 10px;
    text-align: center;

    cursor:pointer

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

   }

`;




