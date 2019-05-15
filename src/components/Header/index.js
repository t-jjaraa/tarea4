// Dependecies
import { Component } from 'react';

// Logo
import logo from '../../assets/images/logo-almundo.svg';

// Css
import './styles.css';

class Header extends Component {
  render() {
    return (
	    <div className="Header">
	      <img className="Logo" src={logo}/>
	    </div>
    );
  }
}

export default Header;