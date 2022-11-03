import React,{Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from "../../services/gotService";
import {withRouter,useHistory} from 'react-router-dom';
import { useState } from 'react';

// class SeasonPage extends Component{
//   gotService = new GotService();

//   state = {
//       selectedChar: null,
//       error: false
//   }

//   onItemSelected = (id) => {
//     this.setState({
//       selectedChar: id
//     })
//   }

//   componentDidCatch(){
//     this.setState({
//       error: true
//     })
//   }

//   render(){
//     if(this.state.error){
//       return <ErrorMessage/>
//     }

//    return <ItemList
//      onItemSelected = {(itemId) => {
//         this.props.history.push(itemId);
//       }}
//       getData = {this.gotService.getAllSeasons}
//       renderItem = {({name}) => name}/>
//   }
// }

const SeasonPage = () => {
  const gotService = new GotService();
  const history = useHistory();

  return <ItemList
      onItemSelected = {(itemId) => {
        history.push(itemId);
      }}
      getData = {gotService.getAllSeasons}
      renderItem = {({name}) => name}/>
      
}

export default withRouter(SeasonPage);
