import React from 'react';
import { Link } from 'react-router-dom';
import './pages.scss';



const LinkAbout = ({ to, className, value }) => {
  return (
    <Link to={to} className={className}>{value}</Link>
  )
}


const AboutPage = () => {



  return(
   
      <div className='about-main'>
        <h1 className='about-main-title'>Hello dear User</h1>
        <p className='about-main-text'>
          Hello new Researcher, this APP will help you to find out with ST's Universe (Stranger of Things), so i deeply hope that you will get absolutely positive feedback from this app.
        </p>
        <p className='about-main-text-free'> Just use and enjoy
          for free</p>
        <LinkAbout to='/' className='about-main-link' value='Get back to Home Page' />
        <LinkAbout to='/characters/' className='about-main-link' value='Get back to Characters' />
        <LinkAbout to='/charPage/' className='about-main-link' value='Get back to Full Character' />
        <LinkAbout to='/seasons/' className='about-main-link' value='Get back to Seasons' />
        <LinkAbout to='/randomChar/' className='about-main-link' value='Get back to Random Character' />
      </div>
  )
}

export default AboutPage;

// export default class AboutPage extends Component {
//   state = {
//     error: false
//   }

//   componentDidCatch() {
//     this.setState({
//       error: true
//     })
//   }

//   render() {

//     if (this.state.error) {
//       return <ErrorMessage />
//     }

//     return (
//       <div className='about-main'>
//         <h1 className='about-main-title'>Hello dear User</h1>
//         <p className='about-main-text'>
//           Hello new Researcher, this APP will help you to find out with ST's Universe (Stranger of Things), so i deeply hope that you will get absolutely positive feedback from this app.
//         </p>
//         <p className='about-main-text-free'> Just use and enjoy
//           for free</p>
//         <LinkAbout to='/' className='about-main-link' value='Get back to Home Page'/>
//         <LinkAbout to='/characters/' className='about-main-link' value='Get back to Characters' />
//         <LinkAbout to='/charPage/' className='about-main-link' value='Get back to Full Character' />
//         <LinkAbout to='/seasons/' className='about-main-link' value='Get back to Seasons'/>
//         <LinkAbout to='/randomChar/' className='about-main-link' value='Get back to Random Character' />
//       </div>
//     )
//   }
// }