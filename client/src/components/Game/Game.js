import React, { Component } from 'react';
import './Game.css';
import ImageAPI from '../ImageAPI/ImageAPI'
import ElementServices from "../../Services/Elements"
import { platform } from 'os';

class Game extends Component {
constructor(props) {
    super(props)
    this.state = {
        arr: new Array(4).fill(0).map((e, i) => i + 1),
        platforms:[
                {
                    x:undefined,
                    y:undefined,
                    w:undefined,
                    h:undefined,
                    color:undefined
                }
        ]
    }
    this.service = new ElementServices();
}
rangeValue = (e) => {
    this.setState({
        ...this.state,
        arr: new Array(+e.currentTarget.value).fill(0).map((e, i) => i + 1)
    })
}

handleChange = (e) => {
    const {id, name, value} = e.currentTarget;
    let newValue = this.state.platforms
    newValue[id][name] = value; 
    this.setState({newValue})
}   

handleFormSubmit = (e) => {
    e.preventDefault();
    const platforms = this.state.platforms;
    this.service.game(platforms)
    .then((platforms)=> {
        console.log(platforms)
    })
    .catch(err => console.log(err))

}

render() {
    console.log(this.state.platforms)
    return (
        <React.Fragment>
            <form onSubmit={this.handleFormSubmit}>
            <input type="range" min="4" max="10" defaultValue="4" onChange={this.rangeValue} />
            {
                this.state.arr.map((e, i) => {
                    return <div className="platforms"> 
                      <h4 key={i}>Platform: {i + 1}</h4>
                      <input type="text" id={i} placeholder="X" onChange={this.handleChange} name="x"></input>
                      <input type="text" id={i} placeholder="Y" onChange={this.handleChange} name="y"></input>
                      <input type="text" id={i} placeholder="W" onChange={this.handleChange} name="w"></input>
                      <input type="text" id={i} placeholder="H" onChange={this.handleChange} name="h"></input>
                      <input type="text" id={i} className="colorPlatform" placeholder="colorPlatform" onChange={this.handleChange} name="color"></input>
                    </div>
                })
            }
            {/* Otras cosas:
                    <input type="text" placeholder="Name" name="gameName"></input>
                    <input type="text" placeholder="speed" name="speed"></input>
                    <input type="text" placeholder="logic" name="logic"></input>
                    <input type="text" placeholder="imageurl" name="imageurl"></input>
                    <ImageAPI /> */}
                    
                    <input type="submit" value="Submit"/>
            </form>
        </React.Fragment>
    )
}



  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isGoing: true,
  //     numberOfGuests: 2
  //   };

  //   this.handleInputChange = this.handleInputChange.bind(this);
  // }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // render() {
  //   return (
  //     <form>
  //       <label>
  //         Platforms number:
         
  //         <input type="range" name="challengeNumber" id="challengeNumber" defaultValue="2" min="0" max="16"
  //       oninput="challengeOutputId.value = challengeNumber.value"></input>
  //       </label>
  //       <label>
  //         Is going:
  //         <input
  //           name="isGoing"
  //           type="checkbox"
  //           checked={this.state.isGoing}
  //           onChange={this.handleInputChange} />
  //       </label>
  //       <br />
  //       <label>
  //         Number of guests:
  //         <input
  //           name="numberOfGuests"
  //           type="number"
  //           value={this.state.numberOfGuests}
  //           onChange={this.handleInputChange} />
  //       </label>
  //     </form>
  //   );
  // }
}

export default Game;
