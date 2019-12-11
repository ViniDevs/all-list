import React, {Component, Fragment} from 'react';
import Navbar from '../../components/navbar';
import Title from '../../components/titbar';
import Footer from '../../components/footer';
import { Article, Header } from '../Series/styles';

import api from '../../services/api';
import { highlightTrailingWhitespace } from 'jest-matcher-utils';

export default class Series extends Component {


state = {

   data:[],
};

async componentDidMount(){

    const series = await api.get("/sample.json");


    this.setState({
        data: series.data.entries.slice(0, 22).filter(program =>
        program.programType ==='series' && program.releaseYear > 2010 )});

    console.log(this.state.data);
}



    render() {
         const {data} = this.state

        return(

            <Fragment>
            <Navbar />
            <Title />
            <Article>
            {data.map(serie => (<Header key={serie.title}>
                    <h1>{serie.title}</h1>
                    <p>{serie.description}</p>
                    <img src={serie.images['Poster Art'].url} alt={serie.title} />
                </Header>)

                )}

            </Article>
            <Footer />
    </Fragment>
        );
    }
}



