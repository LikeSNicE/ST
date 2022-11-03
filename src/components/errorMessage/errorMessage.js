// import React from 'react';
import styled from 'styled-components';
import img from './error.png';
import './errorMessage.scss';
import { BrowserRouter as Router} from 'react-router-dom';



const TextError = styled.p`
  font-weight: 700;
  color: #1e193c;
  margin-top: 20px;
  font-size: 26px;
  text-align: center;
`



const ErrorMessage = () => {
  return(
    <Router>
      <div className='error-page'>
        <img className='img-error' src={img} alt="error message" />
        <TextError>Sorry, but something goes wrong</TextError>
        <TextError>Извините что-то пошло не так</TextError>
      </div>
    </Router>
  )
}





export default ErrorMessage;