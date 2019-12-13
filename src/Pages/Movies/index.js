import React, {Component} from 'react';

import Navbar from '../../components/navbar';
import Title from '../../components/titbar';
import Footer from '../../components/footer';
import MovieList from '../../components/moviesList';

export default class Movies extends Component {


    render() {
        return(

            <>
            <Navbar />
            <Title />
            <MovieList />
            <Footer />
            </>
        );
    }
}
