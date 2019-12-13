import React, {Component} from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';


export default class App extends Component{

   render() {
     return(
         <>
         <Routes />
         <GlobalStyle />
         </>
     );
   }
}

/* Para roteamento de navegação é preciso primeiro instalar a biblioteca
react-router-dom, para mais de uma página, utilizamos como caminho
o arquivo App.js, para a colocação do BrowserRouter, Switch e Route
conforme mostra ali cima como deve ser feita a estrutura, e nas páginas demais
utilizamos {Link} criamos uma tag no lugar do (a href).*/


