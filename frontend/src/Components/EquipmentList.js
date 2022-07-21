import React, {Component} from "react";
import '../styles/App.css'
import euipImg from '../images/equipment.jpg'

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
              <img className="equipment_img" src={euipImg}/>
                <b className="equipment_name" >
                Название: {item.name}<br/>
                Год изготовления: {item.yearOfProduction}<br/>
                Кафедра: <br/> {/*item. а потом идет название кафедры с бд*/}
                Ответсвтеный: <br/>
                
                <button className="equipment_button">Посмотреть</button>
                
            </b>
            
            
            </div>
            
        ))}
          </ul>
          
            
        )
    }
  }
}