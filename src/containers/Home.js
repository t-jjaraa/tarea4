// Dependencies
import { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Layout from '../components/Layout';
import Header from '../components/Header';
import Content from '../components/Content';

// Actions
import { fetchHotels } from '../state/actions';

class Home extends Component {
	componentWillMount() {
		// get hotels Api
		this.props.dispatch(fetchHotels({type: "hotels"}));
	}	

	render() { 
		let hotels = this.props.hotels;
		    
		return (
			<Layout>
				<Header />
					<Content hotels={hotels} search={this.props} />
			</Layout>

		)
	}
}


// Passing the hotels data from the global state to the container
const mapState = ({hotels}) => ({hotels});

// export the component connected to the global state
export default connect(mapState)(Home);