import React, {Component, Fragment} from 'react';
import Navbar from '../../components/navbar';
import Title from '../../components/titbar';
import Footer from '../../components/footer';
import { Article } from '../Series/styles';

import api from '../../services/api';

export default class Series extends Component {

/*state = {
    series: []
};

async componentDidMount() {
    const response = await api.get('series')

      this.setState({series: response.data})
}*/


    render() {
        return(

            <Fragment>
            <Navbar />
            <Title />
            <Article>

            </Article>
            <Footer />
    </Fragment>
        );
    }
}


/*
{ series.map(serie =>(
                   <li key={serie.title}>
                       <strong>{serie.releaseYear}</strong>
                   </li>
              )) }
*/
