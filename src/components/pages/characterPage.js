import  {useState} from 'react';
import CharacterDetails,{ Field } from '../characterDetails';
import ItemList from '../itemList';
import GotService from "../../services/gotService";
import RowBlock from '../rowBlock';


const CharacterPage = () => {
  const gotService = new GotService();

  const[selectedChar,setSelectedChar] = useState(null);

  const onItemSelected = (id) => {
    setSelectedChar(id);
  }
  
    const itemList = (
    <ItemList
      onItemSelected={onItemSelected}
      getData={gotService.getAllCharacters}
      renderItem={({name,act}) => `${name} (${act})`}
      />
   )

  const charDetails = (
    <CharacterDetails
    charId={selectedChar}
    getData={gotService.getCharacter}>
      <Field field='born' label='Born' />
      <Field field='genger' label='Gender'/>
      <Field field='status' label='Status' />
      <Field field='act' label='Act' />
      <Field field='seasons' label='Seasons'/>
    </CharacterDetails>
  )

  return(
    <RowBlock left={itemList} right={charDetails} />
  )
}

export default CharacterPage;

// export default class CharacterPage extends Component{

//   gotService = new GotService();

//   state = {
//     selectedChar: null,
//     error: false,
//   }

//   onItemSelected = (id) => {
//     this.setState({
//       selectedChar: id
//     })
//   }

//     componentDidCatch(){
//       this.setState({
//         error: true
//       })
//     }

//   render(){
//    if(this.state.error){
//     return <ErrorMessage/>
//    }


//     const itemList = (
//     <ItemList 
//       onItemSelected={this.onItemSelected}
//       getData={this.gotService.getAllCharacters}
//       renderItem={({name,act}) => `${name} (${act})`}
//       />
//    )

//   const characterDetails = (
//     <CharacterDetails
//       charId = {this.state.selectedChar}
//       getData = {this.gotService.getCharacter}
//       >
//       <Field field='born' label='Born'/>
//       <Field field = 'gender'
//       label = 'Gender' / >
//       <Field field = 'status' label = 'Status' / >
//       <Field field='act' label='Act (or || ress) '/>
//       <Field field='seasons' label='Seasons'/>
//     </CharacterDetails>
//   )

//    return(
//     <RowBlock left={itemList} right={characterDetails}/>
//    )
//   }
// }


