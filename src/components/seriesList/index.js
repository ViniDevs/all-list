import React, {Component} from 'react';
import api from '../../services/api';
import {SerieLists} from './styles';

export default class SerieList extends Component{

    state = {

        data:[],
     };

     async componentDidMount(){

         const series = await api.get("/sample.json");

         const data = series.data.entries

         this.setState({
             data: data.slice(0, 28).filter(program =>
             program.programType ==='series' && program.releaseYear > 2010 )});

         console.log(this.state.data);
     }

  render(){
      const { data } = this.state;

      return(
         <SerieLists>

              {data.map(serie => (

              <div className="post" key={serie.title}>
                    <img src={serie.images['Poster Art'].url} alt={serie.title} />
                    <h5>{serie.title}</h5>
                    <p>{serie.description}</p>
              </div>))}

         </SerieLists>
      );
  }
}
