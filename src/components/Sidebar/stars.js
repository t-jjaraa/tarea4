// Dependencies
import { Component } from 'react';
import { fetchHotels } from '../../state/actions';

// Icons
import IconStar from '../Icons/star';

class Stars extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = { selected: 6 };
    }

    listStars(){
        let stars = [1,2,3,4,5],
            data  = [];

        for (let item = 0; item < stars.length; item++) {

            data.push(<div key={item}>
                        <input type="checkbox" value={(item + 1)} onChange={(element) => {this.onInputChange(item+1)}} checked={this.state.selected === (item + 1)}/>
                        {this.checkStar(item)}
                    </div>);
        }

        return data.reverse();
    }
    checkStar(item){
        let data  = [];

        for (let element = 0; element <= item; element++) {
            data.push(<IconStar key={element} size={14} color="#ffcb05" />);
        }

        return data;

    }

    onInputChange(data) {
        this.setState({
            selected: data
        });
        this.props.search.dispatch(fetchHotels({type: "stars", data: data})); 
    }

    render() {
        let listStars = this.listStars();

        return (
        <div className="Stars Hotel-title"> 
            <label>Estrellas</label>
            <div>
                <input type="checkbox" value={6} onChange={(element) => {this.onInputChange(6)}} checked={this.state.selected === 6} />
                <span className="All-stars">Todas las estrellas</span>
            </div>
            {listStars}
        </div>
        );
    }
}

export default Stars;