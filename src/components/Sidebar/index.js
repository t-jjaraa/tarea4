// Dependecies
import { Component } from 'react';

// Components
import Search from './search';
import Stars from './stars';

// Css
import './styles.css';

class Sidebar extends Component {
  render() {
    return (
	    <div className="Sidebar d-none d-sm-block">
	    	<div className="Filters">
	    		<label>Filtros</label>
	    	</div>	
	    	<Search search={this.props.search} />
	    	<Stars search={this.props.search} />
	    </div>
    );
  }
}

export default Sidebar;