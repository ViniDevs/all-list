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

state = {

   data:[],
};

async componentDidMount(){

    const series = await api.get(`/sample.json`);
    this.setState({data: series.data.entries})
    console.log(this.state.data)

}

    render() {
         const {data} = this.state
        return(

            <Fragment>
            <Navbar />
            <Title />
            <Article>
            {data && data.map(serie => (<li key={serie.title}>
                    {serie.title}

                </li>))}
                {/* {data && data.filter(serie => serie.programTypes('series'))} */}
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
