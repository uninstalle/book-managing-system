import React from 'react';
import './Home.css';
import logo from '../../assets/logo.png';


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <img src={logo} alt="logo" className="Home-logo" />
        <p>
          Welcome to Book Managing System.
        </p>
        <a
          className="Home-enter-link"
          href="/manage"
        >
          Enter
        </a>
      </div>
    );
  }
}



export default Home;
