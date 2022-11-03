import ItemDetails, { Field } from '../itemDetails';
import GotService from "../../services/gotService";

const SeasonItem = ({seasonId}) => {
  const gotService = new GotService();

  return(
    <ItemDetails
        itemId={seasonId}
        getData={gotService.getSeason}
      >
        <Field field='name'
          label='Season' />
        <Field field='releaseDate' label='Release Date' />
        <Field field='episodes' label='Episodes' />
        <Field field='ep1' label='Episode 1' />
        <Field field='ep2' label='Episode 2' />
        <Field field='ep3' label='Episode 3' />
        <Field field='ep4' label='Episode 4' />
        <Field field='ep5' label='Episode 5' />
        <Field field='ep6' label='Episode 6' />
        <Field field='ep7' label='Episode 7' />
        <Field field='ep8' label='Episode 8' />
        <Field field='ep9' label='Episode 9' />
      </ItemDetails>
  )
}

export default SeasonItem;

// export default class SeasonItem extends Component {
//   gotService = new GotService();

//   render() {
//     return (
//       <ItemDetails
//         itemId={this.props.seasonId}
//         getData={this.gotService.getSeason}
//       >
//         <Field field='name'
//           label='Season' />
//         <Field field='releaseDate' label='Release Date' />
//         <Field field='episodes' label='Episodes' />
//         <Field field='ep1' label='Episode 1' />
//         <Field field='ep2' label='Episode 2' />
//         <Field field='ep3' label='Episode 3' />
//         <Field field='ep4' label='Episode 4' />
//         <Field field='ep5' label='Episode 5' />
//         <Field field='ep6' label='Episode 6' />
//         <Field field='ep7' label='Episode 7' />
//         <Field field='ep8' label='Episode 8' />
//         <Field field='ep9' label='Episode 9' />
//       </ItemDetails>
//     )
//   }
// } 