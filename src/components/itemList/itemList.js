
// import React from "react";
import { useState,useEffect } from "react";
import ErrorMessage from "../errorMessage";
import Spinner from "../spinner";
import './itemList.scss';
import {withErrorBoundary} from 'react-error-boundary';

const ItemList = ({ getData, renderItem, onItemSelected }) => {
  const[itemList,setItemList] = useState(null);

  useEffect(() => {
    getData()
      .then((itemlist) => {
        setItemList(itemlist)
      })
  },[])

  const renderItems = (arr) => {
    return arr.map(item => {
      const {id} = item;
      const label = renderItem(item);
      
      return(
        <li
        key={id}
        className="list-group-item"
        onClick={() => onItemSelected(id)}>
        {label}
        </li>
      )
    })
  }

  if(!itemList){
    return <Spinner/>
  }

  const items = renderItems(itemList);

  return(
    <div>
      <ul className="list-group item-list">
        {items}
      </ul>
    </div>
  )
}

// export default ItemList;

export default withErrorBoundary(ItemList,{
  FallbackComponent: <ErrorMessage/>
});

// export default class ItemList extends Component{
//   state = {
//     itemList: null,
//     error: false
//   }

//   componentDidMount(){
//     const {getData} = this.props;

//     getData()
//       .then((itemList) => {
//         this.setState({
//           itemList
//         })
//       })
//   }

//   componentDidCatch(){
//     this.setState({
//       error: false
//     })
//   }

//   renderItems(arr){
//     return arr.map(item => {
//       const {id} = item;
//       const label = this.props.renderItem(item);
//       const {onItemSelected} = this.props

//       return(
//         <li
//         key={id}
//         className="list-group-item"
//         onClick={() => onItemSelected(id)}
//         >
//           {label}
//         </li>
//       )
//     })
//   }

//   render(){
//     const{error,itemList} = this.state;

//     if(!itemList){
//       return <Spinner/>
//     }

//     if(error){
//       return <ErrorMessage/>
//     }

//     const items = this.renderItems(itemList);

//     return(
//       <ul className="list-group item-list">
//         {items}
//       </ul>
//     )
//   }
// }
