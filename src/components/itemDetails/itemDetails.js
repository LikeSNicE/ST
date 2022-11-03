
import React, {Component} from 'react';
import { useState,useEffect} from 'react';
import styled from "styled-components";
import './itemDetails.scss';

const ItemDetailsTitle = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const SelectError = styled.span`
    background-color: #fff;
    color: #000;
    text-align: center;
    font-size: 26px;
    padding: 0 20px;
`;


const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};

const ItemDetails = ({itemId,getData,children}) => {
  const [item,setItem] = useState(null);

  useEffect(() => {
     updateItem();
  })

  const updateItem = () => {
    if (!itemId) {
      return
    }

    getData(itemId)
      .then((item) => setItem(item))
  }


  if(!item){
    return <SelectError className='select-error'>
    Please select item...
    </SelectError>
  }

  const {name} = item;
  return(
    <div className="item-details rounded">
      <ItemDetailsTitle>{name}</ItemDetailsTitle>
      <ul className="list-group list-group-flush">
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { item })
          })
        }
      </ul>
    </div>
  )
}

export default ItemDetails;


// export default class ItemDetails extends Component {

//     state = {
//         item: null
//     }

//     componentDidMount() {
//         this.updateItem();
//     }
    
//     componentDidUpdate(prevProps) {
//         if (this.props.itemId !== prevProps.itemId) {
//             this.updateItem();
//         }
//     }

//     updateItem() {
//         const {itemId, getData} = this.props;
//         if (!itemId) {
//             return;
//         }

//         getData(itemId)
//             .then((item) => {
//                 this.setState({item})
//             })
//     }

//     render() {

//         if (!this.state.item) {
//             return <SelectError className='select-error'> Please select item...</SelectError>
//         }
//         const {item} = this.state;
//         const {name} = item;

//         return (
//             <div className="item-details rounded">
//                 <ItemDetailsTitle>{name}</ItemDetailsTitle>
//                 <ul className="list-group list-group-flush">
//                     {
//                         React.Children.map(this.props.children, (child) => {
//                             return React.cloneElement(child, {item})
//                         })
//                     }
//                 </ul>
//             </div>
//         );
//     }
// }