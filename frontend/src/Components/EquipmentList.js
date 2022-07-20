import React, {Component} from "react";
import '../styles/App.css'

export class EquipmentList extends Component {

    constructor(props) {
        super(props)
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        }
      }
    
      componentDidMount(){
        fetch("http://localhost:4000/equipment")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({isLoaded: true, items: result});
          },
          (error) => {
            this.setState({
                isLoaded: true,
                error
            });

        }
        )
      }
    
    render() {
      const {error, isLoaded, items} = this.state;
      if(error){
        return <p>Error {error.message}</p>
    }
    else if(!isLoaded){
      return <p>Loading...</p>
  }
  else {
        return(
          <ul>
            {items.map(item => (
            <div className='equipment_card'>
                <p key={items.name}>
                {item.name}
            </p>
            </div>
            
        ))}
          </ul>
          
            
        )
    }
  }
}