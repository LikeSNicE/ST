import React, { Component, useState } from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from "../../services/gotService";
import { withRouter,useHistory } from 'react-router-dom';

const CharPage = () => {
  const gotService = new GotService();
  const history = useHistory();

  // const[selectedSeason,setSelectedSeason] = useState(null);

  return <ItemList
    onItemSelected={(itemId) => {
         history.push(itemId);
       }}
       getData={gotService.getAllCharacters}
       renderItem={({ name }) => name}

  />
}

export default withRouter(CharPage);

// class CharPage extends Component {
//   gotService = new GotService();

//   state = {
//     selectedSeason: null,
//     error: false
//   }

//   onItemSelected = (id) => {
//     this.setState({
//       selectedSeason: id
//     })
//   }

//   componentDidCatch() {
//     this.setState({
//       error: true
//     })
//   }

//   render() {
//     if (this.state.error) {
//       return <ErrorMessage />
//     }

//     return <ItemList
//       onItemSelected={(itemId) => {
//         this.props.history.push(itemId);
//       }}
//       getData={this.gotService.getAllCharacters}
//       renderItem={({ name }) => name} />
//   }
// }
// export default withRouter(CharPage);