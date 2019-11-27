import React, {Component, Fragment} from 'react';
import Inicial from './Pages/Inicial/index';
import Series from './Pages/Series/index';
import InjectGlobal from './styles/global';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default class App extends Component{

   render() {
     return(
     <BrowserRouter>

      <Fragment>
      <InjectGlobal />
      <Switch>
      <Route path="/" exact={true} component={Inicial}/>
      <Route path="/Series" component={Series} />
      </Switch>
    </Fragment>
    </BrowserRouter>
     );
   }
}

/* Para roteamento de navegação é preciso primeiro instalar a biblioteca
react-router-dom, para mais de uma página, utilizamos como caminho
o arquivo App.js, para a colocação do BrowserRouter, Switch e Route
conforme mostra ali cima como deve ser feita a estrutura, e nas páginas demais
utilizamos {Link} criamos uma tag no lugar do (a href).*/


