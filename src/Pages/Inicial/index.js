import React from 'react';
import Navbar from '../../components/navbar';
import Title from '../../components/titbar';
import Footer from '../../components/footer';
import {Article} from './styles';

import { Link } from 'react-router-dom';

const Inicial = () =>(
    <>
    <Navbar />
    <Title />
    <Article>
        <section>
            <Link to="/Series"><div>Séries</div></Link>
            <p>Séries Populares</p>
        </section>

        <section>
            <div>Filmes</div>
            <p>Filmes Populares</p>
        </section>

    </Article>
     <Footer />
    </>
);

export default Inicial;
