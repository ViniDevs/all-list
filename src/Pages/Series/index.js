import React, {Component} from 'react';

import Navbar from '../../components/navbar';
import Title from '../../components/titbar';
import Footer from '../../components/footer';
import SerieList from '../../components/seriesList';

export default class Series extends Component {


    render() {
        return(

            <>
            <Navbar />
            <Title />
            <SerieList />
            <Footer />
            </>
        );
    }
}



