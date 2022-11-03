import React, { Component } from "react";
import ErrorMessage from "../errorMessage";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import './characterDetails.scss';

const ItemDetailsTitle = styled.h4 `
    margin-bottom: 20px;
    text-align: center;
`;

const SelectError = styled.span `
    background-color: #fff;
    color: #000;
    text-align: center;
    font-size: 26px;
    padding: 0 20px;
`;

const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </li>
    )
}

export {
  Field
};

const CharacterDetails = ({charId,getData,children}) => {
  const[char,setChar] = useState(null);

  useEffect(() => {
    updateCharacter();
  })

  const updateCharacter = () => {
    if(!charId){
      return
    }

    getData(charId)
      .then((char) => setChar(char))
  }



  if(!char){
    return <SelectError className="select-error">
      Please select character...
    </SelectError>
  }

  const {name,photo} = char;

  return(
 
    <div className="item-details rounded">
      <ItemDetailsTitle>{name}</ItemDetailsTitle>
      <img src={photo} alt='item' className='item-details-photo--character' />
      <ul className="list-group list-group-flush">
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, { char })
          })
        }
      </ul>
    </div>
  )
}

export default CharacterDetails;

// export default class CharacterDetails extends Component{

//   state = {
//     char: null
//   }

//   componentDidMount(){
//     this.updateCharacter();
//   }

//   componentDidUpdate(prevProps){
//     if(this.props.charId !== prevProps.charId){
//       this.updateCharacter();
//     }
//   }

//   updateCharacter() {
//     const {charId,getData} = this.props;

//     if(!charId){
//       return;
//     }

//     getData(charId)
//       .then((char) => {
//         this.setState({char})
//       })
//   }

//   render(){
    
//     if(!this.state.char){
//       return <SelectError>Please select character...</SelectError>
//     }

//     if(this.state.error){
//       return <ErrorMessage/>
//     }

//     const {char} = this.state;
//     const {name,photo} = char;

//     return (
//       <div className="char-details rounded">
//         <ItemDetailsTitle>{name}</ItemDetailsTitle>
//          {
//           <img src={photo} alt='item' className='item-details-photo--character'/>}
//         <ul className="list-group list-group-flush">
//           {
//             React.Children.map(this.props.children, (child) => {
//               return React.cloneElement(child,{char})
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }