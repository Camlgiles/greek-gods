import React from 'react';
import { Link } from 'react-router-dom';
// import Create from '../create/Create';
// import GodsList from '../gods/GodsList';

export default () => {
  return (
    <div>
          <Link to="/new">Create stuff</Link>
          <br></br>
          <Link to="/">Back to gods index</Link>
    </div>
  )
}