import React from 'react';
import {Link} from 'react-router';

export const Header = (props) => {
  return(
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="container">
              <ul className="nav navbar-nav">
                <li><Link to="/home" activeStyle={{color: "red"}}>Home</Link></li>
                <li><Link to="/user">User</Link></li>
              </ul>
            </div>
        </div>
    </nav>
  );
};
