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
            <SocialLink to="/series">Series</SocialLink>
            <p>Popular Series</p>
        </section>

        <section>
            <SocialLink to="/movies"><div>Movies</div></SocialLink>
            <p>Popular Movies</p>
        </section>

    </Article>
     <Footer />
    </>
);

export default Inicial;
