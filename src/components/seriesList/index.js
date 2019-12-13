import React, {Component} from 'react';
import api from '../../services/api';
import {SerieLists, Header} from './styles';

export default class SerieList extends Component{

    state = {

        data:[],
     };

     async componentDidMount(){

         const series = await api.get("/sample.json");

         const data = series.data.entries

         this.setState({
             data: data.slice(0, 22).filter(program =>
             program.programType ==='series' && program.releaseYear > 2010 )});

         console.log(this.state.data);
     }

  render(){
      const { data } = this.state;

      return(
         <SerieLists>
              {data.map(serie => (<Header key={serie.title}>
                    <img src={serie.images['Poster Art'].url} alt={serie.title} />
                    <h6>{serie.title}</h6>
                    <p>{serie.description}</p>
                </Header>))}
         </SerieLists>
      );
  }
}
