// Dependecies
import { Component } from 'react';

// Css
import './styles.css';

class Layout extends Component {
  render() {
    return (
      <section className="Layout">
        {this.props.children}
      </section>
    );
  }
}

export default Layout;