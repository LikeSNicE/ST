import React, { Component } from 'react';
import ErrorMessage from '../errorMessage';
import Header from '../header';
import RandomChar from '../randomChar';
import { Container } from 'reactstrap';
import GotService from '../../services/gotService';
import './app.scss';
import { CharacterPage, SeasonPage, SeasonItem, About, CharPage, CharItem } from '../pages';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ListBlock from '../listBlock';
import { withErrorBoundary } from 'react-error-boundary';


const App = () => {
  
  return (
    <Router>
      <Switch>
        <>
          <div className='app'>
            <div className='app'>
              <Container>
                <Header />
              </Container>
              <Container>
                <Route exact path='/' component={() => <>
                  <h1 className='home-title'>Hi Stranger </h1>
                  <h2 className='home-title'>Choose one category</h2>
                  <ListBlock />
                </>} />
                <Route path='/characters' component={CharacterPage} exact />
                <Route path='/seasons' component={SeasonPage} exact />
                <Route path='/seasons/:id'
                  render=
                  {({ match }) => {
                    const { id } = match.params;
                    return <SeasonItem seasonId={id} />
                  }} />
                <Route path='/charpage/' component={CharPage} exact />
                <Route path='/charpage/:id'
                  render=
                  {({ match }) => {
                    const { id } = match.params;
                    return <CharItem charId={id} />
                  }} />
                <Route path='/randomchar' component={RandomChar} exact />
                <Route path='/about' component={About} exact />
                <Route render={() => <Redirect to={{ pathname: "/" }} />} />
              </Container>
            </div>
          </div>
        </>
      </Switch>
    </Router>
  )
}

// class App extends Component {

//   state = {
//     error: false
//   }

//   gotService = new GotService();

//   componentDidCatch() {
//     this.setState({
//       error: true
//     })
//   }

//   render() {

//     if (this.state.error) {
//       return <ErrorMessage/>
//     }
//     return (
//       <Router>
//         <Switch>
//         <React.Fragment>
//             <div className='app'>
//               <div className='app'>
//                 <Container>
//                   <Header />
//                 </Container>
//                 <Container>
//                   <Route exact path='/' component={() => <>
//                     <h1 className='home-title'>Hi Stranger </h1>
//                     <h2 className='home-title'>Choose one category</h2>
//                     <ListBlock />
//                   </>} />
//                   <Route path='/characters' component={CharacterPage} exact />
//                   <Route path='/seasons' component={SeasonPage} exact />
//                   <Route path='/seasons/:id'
//                     render=
//                     {({ match }) => {
//                       const { id } = match.params;
//                       return <SeasonItem seasonId={id} />
//                     }} />
//                   <Route path='/charpage/' component={CharPage} exact />
//                   <Route path='/charpage/:id'
//                     render=
//                     {({ match }) => {
//                       const { id } = match.params;
//                       return <CharItem charId={id} />
//                     }} />
//                   <Route path='/randomchar' component={RandomChar} exact />
//                   <Route path='/about' component={About} exact />
//                   <Route render={() => <Redirect to={{ pathname: "/" }} />} />
//                 </Container>
//               </div>
//             </div>
//         </React.Fragment>
//         </Switch>
//       </Router>
//     )
//   }
// }

// export default withErrorBoundary(App, {
//   FallbackComponent: <ErrorMessage />
// }
// );

export default App;

