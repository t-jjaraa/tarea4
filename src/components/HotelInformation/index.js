// Dependecies
import { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

// Css
import './styles.css';

// Icons
import Star from '../Icons/star';

class HotelInformation extends Component {

    getAmenities(){
        let amenities = this.props.amenities,
            data      = [];

        amenities.map((name, index) => {
            data.push(<img className="Amenities" key={index} src={`icons/amenities/${name}.svg`} />);       
                    
        })

        return (
            <div>{data}</div>
        );

    }
    getStars(){
        let stars = this.props.stars,
            data  = [];

        for (let item = 0; item < stars; item++) {
            data.push(<Star key={item} size={18} color="#ffcb05" />);
        }

        return (
            <div className="Star">{data}</div>
        ); 
    }
    render() {
        let hotel     = this.props,
            stars     = this.getStars(),
            amenities = this.getAmenities();

        return (
            <Row className="Hotel-information">      
                <Col lg="4" className="pl-0">    
                    <img className="Hotel-image" src={`images/hotels/${hotel.image}`}/>
                </Col>
                <Col lg="5" className="pl-0"> 
                    <div className="Hotel-title">{hotel.name}</div>                   
                    <div>{stars}</div>                   
                    <div>{amenities}</div>                           
                </Col>                        
                <Col lg="3" className="Price-description"> 
                    <div>
                        <h6>Precio por noche por habitación</h6>
                    </div>
                    <div className="Price">
                        <label>ARS</label> 
                        <span>{hotel.price}</span>
                    </div>
                    <div>
                        <Button className="btn-md Btn-hotel">Ver Hotel</Button>
                    </div>
                </Col>                
            </Row>                            
        );
    }
}

export default HotelInformation;
