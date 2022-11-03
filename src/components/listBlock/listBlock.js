import React from "react";
import { Link } from "react-router-dom";

const ListBlock = () => {
  return(
    <ul className='list-group'>
      <ListItem to='/characters/' title='Characters' value='Characters'/>
      <ListItem to='/seasons/' title='Seasons' value='Seasons' />
      <ListItem to='/about/' title='About' value='About'/>
    </ul>
  )
}

const ListItem = ({to,title,value}) => {
  return(
    <li className="list-group-item">
      <Link to={to} title={title}>{value}</Link>
    </li>
  )
}

export default ListBlock;