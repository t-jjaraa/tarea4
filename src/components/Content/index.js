// Dependecies
import { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Components
import Sidebar from '../Sidebar';
import HotelInformation from '../HotelInformation';

// Css
import './styles.css';

class Content extends Component {
  
  render() {
    let hotels = this.props.hotels;    

    return (
      <div className="Content">
        <Row> 
            <Col lg="3"> 
                <div className="Filter col-12 d-block d-sm-none Hotel-title">
                    <label>Filtrar</label>
                </div>
                <Sidebar search={this.props.search} />        
            </Col>
            <Col lg="9">         
            {
                hotels.map((hotel) => {
                    return (
                            <HotelInformation 
                                key={hotel.id} 
                                {...hotel}                                 
                            />
                           )
                })
            }                
            </Col>      
        </Row>       
      </div>
    );
  }
}

export default Content;