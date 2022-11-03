import { useParams } from "react-router-dom";
import GotService from "../../services/gotService";
import CharacterDetails, { Field } from '../characterDetails';
import './pages.scss';

const CharItem = () => {
  const gotService = new GotService();
  const { id } = useParams();

  return (
    <div className='char-item'>
      <CharacterDetails
        charId={id}
        getData={gotService.getCharacter}
      >
        <Field field='name' label='Name' />
        <Field field='born' label='Born' />
        <Field field='gender' label='Gender' />
        <Field field='status' label='Status' />
        <Field field='act' label='Act (or || ress)' />
        <Field field='seasons' label='Seasons' />
      </CharacterDetails>
    </div>
  )
}

export default CharItem;