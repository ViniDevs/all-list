import styled from 'styled-components';

export const Foter = styled.div`
 display:flex;
 flex-direction: column;
 justify-content: space-evenly;
 align-items: flex-start;

 background: #1C1C1C;
 height: 200px;
 font-family: cursive;


ul{
    display: flex;
    color: white;
    list-style: none;
}

ul li{

    border-right: 2px solid white;
    padding-left: 20px;
    padding-right: 10px;
}
 p{ 
    color: white;
    padding-left: 20px;
 }

`;