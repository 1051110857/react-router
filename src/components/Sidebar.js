import React from 'react';
import { Link } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
class Sidebar extends React.Component {
 
  render() {
    return (
        <div className="col-sm-3 col-md-2 sidebar" style={{top :0}}>
          <ul className="nav nav-sidebar">
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/other">OTHER</Link>
            </li>
          </ul>
        </div>
    )
  }
}
export default Sidebar
