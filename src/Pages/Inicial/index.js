import React from 'react';
import Navbar from '../../components/navbar';
import Title from '../../components/titbar';
import Footer from '../../components/footer';
import {Article} from './styles';


import SocialLink from './styles';

const Inicial = () =>(
    <>
    <Navbar />
    <Title />
    <Article>
        <section>
            <SocialLink to="/Series"><div>Séries</div></SocialLink>
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
