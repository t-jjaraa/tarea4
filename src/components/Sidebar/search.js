// Dependecies
import { Component } from 'react';
import { Button } from 'reactstrap';
import { fetchHotels } from '../../state/actions';

// Icon
import IconSearch from '../Icons/search'; 

class Search extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }	

  onInputChange(element) { 
    let data = element.currentTarget.value;
    this.setState({
      hotel: data
    });
  }

  onSubmit(element) {
    element.preventDefault();
    this.props.search.dispatch(fetchHotels({type: "name", data: this.state.hotel})); 
  }  

  render() {
    return (
    <div className="Search Hotel-title">
    	<IconSearch size={16} color="#157ab0" />
    	<label>Nombre de hotel</label>
		<div className="input-group mb-3">
		  <input type="text" className="form-control" placeholder="Ingrese el nombre del hotel" onChange={this.onInputChange}/>
		  <Button className="btn-sm Btn-hotel" onClick={this.onSubmit}>Aceptar</Button>		  
		</div>
    </div>
    );
  }
}

export default Search;