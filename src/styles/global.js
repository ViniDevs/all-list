import { createGlobalStyle } from "styled-components";


const InjectGlobal = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
}
body {
    background: #FFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default InjectGlobal;