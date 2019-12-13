import React, {Component} from 'react';
import api from '../../services/api';
import {MovieLists} from './styles';

export default class MovieList extends Component{

    state = {

        datas:[],
     };

     async componentDidMount(){



         const movies = await api.get("/sample.json");

         const datas = movies.data.entries

         console.log(datas);

        this.setState({
             datas:datas.filter(programs =>
                programs.programType === 'movie' && programs.releaseYear > 2010)});
                 console.log(this.state.datas)

     }



  render(){
      const { datas} = this.state;

      return(
         <MovieLists>

              {datas.map(movie => (

              <div className="post" key={movie.title}>
                    <img src={movie.images['Poster Art'].url} alt={movie.title} />
                    <h5>{movie.title}</h5>
                    <p>{movie.description}</p>
              </div>))}

         </MovieLists>
      );
  }
}
