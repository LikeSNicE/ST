
import React,{useState,useEffect} from "react";
import './randomChar.scss';
import GotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";
import PropsTypes from 'prop-types';
import styled from "styled-components";


const ToggleButton = styled.button `
    padding: 12px;
    background-color: #000;
    border: none;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 40px;
    outline: none;
    box-shadow: 0px 0px 30px rgba(256,256,256,.1);
    cursor: pointer;
    border: 2px solid red;
    box-shadow: 1px 1px 15px darkred,
      -1px 1px 10px darkred;
`
const RandomChar = ({ interval }) => {
  const gotService = new GotService();

  const[char,setChar] = useState(null);
  const [showRandomChar,setShowRandomChar] = useState(true);
  const[loading,setLoading] = useState(true);
  const [error,setError] = useState(false);

  useEffect(() => {
    updateChar();
    // return function cleanUp(){
    //   clearInterval(timerId);
    // }
  },[])

  const toggleRandomChar = () => {
    updateChar();
  }

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  }

  const updateChar = () => {
    const id = Math.floor(Math.random() * 13 + 1);
    gotService.getCharacter(id)
      .then(onCharLoaded)
  }

  // const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error || !showRandomChar) ? <View char={char}/> : null

  return(
    <div>
      <div className="random-block rounted">
        {/* {errorMessage} */}
        {spinner}
        {content}
      </div>
      <ToggleButton onClick={toggleRandomChar}>Change Character</ToggleButton>
    </div>
  )
}


const View = ({char}) => {
  const { name,
    act,
    born,
    status,
    seasons,
    gender,
    photo } = char;

  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush list--group">
        <img src={photo} alt='item' className='random-char-img' />
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender</span>
          <span className="term">{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born</span>
          <span className="term">{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Seasons</span>
          <span className="term">{seasons}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Act</span>
          <span className="term">{act}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Status</span>
          <span className="term">{status}</span>
        </li>
      </ul>
    </>
  )
}

export default RandomChar;

// export default class RandomChar extends Component {

//   gotService = new GotService();
//   state = {
//     char: {},
//     showRandomChar: true,
//     loading: true,
//     error: false
//   }

//   // 1 - й метод props по умолчанию 

//    // static defaultProps = {
//    //   interval: 15000
//    // }

//   componentDidMount(){
//     // const {interval} = this.props;
//     this.updateChar();
//     // this.timerId = setInterval(this.updateChar,interval);
//   }

//   componentWillUnmount(){
//     clearInterval(this.timerId);
//   }

//     toggleRandomChar = () => {
//       this.updateChar();
//     }

//    // Для чего пишем Стрелочную функцию, потому что убираем проблемы с контекстом вызова 
//   onCharLoaded = (char) => {
//     this.setState({
//       char,
//       loading: false
//     })
//   }

//   onError = (err) => {
//     this.setState({
//       error: true,
//       loading: false
//     })
//   }

//   updateChar = () =>{
//     const id = Math.floor(Math.random() * 13 + 1); // c 1 - по 13 персонаж 
//     this.gotService.getCharacter(id)
//         .then(this.onCharLoaded)
//         .catch(this.onError)
//   }

//   render(){


//   const {char,loading,error,showRandomChar} = this.state;
   
   
//    const errorMessage = error ? <ErrorMessage/> : null;
//    const spinner = loading ? <Spinner/> : null
//    const content = !(loading || error || !showRandomChar) ? <View char={char}/> : null;

    
//     return(
//       <div>
//         <div className="random-block rounted">
//         {errorMessage}
//         {spinner}
//         {content}
//       </div>
//       <div>
//         <ToggleButton onClick={this.toggleRandomChar}>Change  Character</ToggleButton>
//       </div>
//       </div>
//     )
//   }
// }

// RandomChar.defaultProps = {
//   interval: 10000
// }

// RandomChar.PropsTypes = {
//   interval: PropsTypes.number
// }

// const View = ({char}) => {
//   const 
//   {name,
//   act,
//   born,
//   status,
//   seasons,
//   gender,
//   photo
//   } = char;
//   return(
//     <>
//         <h4>Random Character: {name}</h4>
//         <ul className="list-group list-group-flush list--group">
//         <img src={photo} alt='item' className='random-char-img'/>
//           <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Gender</span>
//             <span className="term">{gender}</span>
//           </li>
//            <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Born</span>
//             <span className="term">{born}</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Seasons</span>
//             <span className="term">{seasons}</span>
//           </li>
//           <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Act</span>
//             <span className="term">{act}</span>
//           </li>
//            <li className="list-group-item d-flex justify-content-between">
//             <span className="term">Status</span>
//             <span className="term">{status}</span>
//           </li>
//         </ul>
//     </>
//   )
// }
