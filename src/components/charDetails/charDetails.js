import React,{Component} from "react";
import './charDetails.scss';
import GotService from "../../services/gotService";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";


const Field = ({char,field,label}) => {
  return(
      <li className="list-group-item d-flex justify-content-between">
        <span className="term">{label}</span>
        <span>{char[field]}</span>
      </li>
  )
}

export{
  Field
}

export default class CharDetails extends Component{

  gotService = new GotService();

  state = {
    char: null,
    loading: true,
    error: false
  }

  onCharLoaded = (char) => {
    this.setState({
      char: char,
      loading: false
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }

  componentDidCatch(){
    this.onError();
  }

  componentDidMount(){
    this.updateChar();
  }

  componentDidUpdate(prevProps){
    if(this.props.charId !== prevProps.charId){
      this.updateChar(); 
    }
  }

  updateChar(){
    const {charId} = this.props;
    if(!charId){
      return; 
    }
    
    this.gotService.getCharacter(charId)
        .then(this.onCharLoaded)
        .catch(this.onError)
  }

  render(){

  if (!this.state.char) {
    return <span className = "error-select"> 
    Please select a Character
    <Spinner/>
    </span>
  }

    const{char,loading,error} = this.state;
    const {name} = char;

   if(loading){
    return <Spinner/>
   }

   if(error){
    return <ErrorMessage/>
   }

   return(
      <div className = "char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child,{char})
            })
          }
        </ul>
      </div>
   );
  }
}





