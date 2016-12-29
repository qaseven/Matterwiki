import React from 'react';
import Login from './login.jsx';
import {Link, hashHistory} from 'react-router';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.setItem('userToken','');
  }

  render () {
    var that = this;
    return(
      <div>
      <nav className="navbar container">
        <div className="container-fluid">
          {(localStorage.getItem('userToken')) ?
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <Link to='home' className="navbar-brand">
                <img src="../assets/logo.png"></img>
              </Link>

          </div>
          :
          <center>
          <a className="navbar-login-logo" href="home">
            <img src="../assets/logo.png"></img>
          </a>
        </center>
        }
          {(localStorage.getItem('userToken')) ?
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
             <li><Link to="article/new" className="">New Article
              </Link>
            </li>
            <li>
              <a href="" className="">Logout</a>
            </li>
            </ul>
          </div>
          : <div/>}
        </div>
      </nav>
        <div className="content container">
          {that.props.children}
          </div>
    </div>

  );
  }
}

export default App;
