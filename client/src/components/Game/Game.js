import React, { Component } from 'react';

import ImageAPI from '../ImageAPI/ImageAPI'
import ElementServices from "../../Services/Elements"
import { platform } from 'os';
import './Game.css';

class Game extends Component {
constructor(props) {
    super(props)
    this.state = {
        arr: new Array(4).fill(0).map((e, i) => i + 1),
        platforms: new Array(4).fill(0).map(() => (
            {
                x: "",
                y: "",
                w: "",
                h: "",
                color: " "
            }
        )),
        name: "",
        speed: "",
        logic: "",
        imageID: ""
    }
    this.service = new ElementServices();
}

rangeValue = (e) => {
    this.setState({
        ...this.state,
        arr: new Array(+e.currentTarget.value).fill(0).map((e, i) => i + 1),
        platforms: new Array(+e.currentTarget.value).fill(0).map(() => (
            {
                x: "",
                y: "",
                w: "",
                h: "",
                color: " "
            }
        ))
    })
}

handleChangeName = (e) => {
    this.setState({
        ...this.state,
        name: e.target.value
    })
   }

handleChangeSpeed = (e) => {
    this.setState({
        ...this.state,
        speed: e.target.value
    })
}

handleChangeLogic = (e) => {
    this.setState({
        ...this.state,
        logic: e.target.value
    })
}

handleChangeImageID = (e) => {
    this.setState({
        ...this.state,
        imageID: e.target.value
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
    const name = this.state.name;
    const speed = this.state.speed;
    const logic = this.state.logic;
    const imageID = this.state.imageID;
    const platforms = this.state.platforms;
    this.service.game(platforms, name, speed, logic, imageID)
    .then((platforms)=> {
        console.log(platforms)
    })
    .catch(err => console.log(err))

}

findUrl = (url) => {
    this.setState({
        ...this.state,
        imageID: url
    })
}

render() {
    return (
        <React.Fragment>
            <form className="platforms">
            <input type="range" min="4" max="10" defaultValue="4" onChange={this.rangeValue} />
            {
                this.state.arr.map((e, i) => {
                    return <div key={i} > 
                      <h4 >Platform: {i + 1}</h4>
                      <input type="text" id={i} placeholder="X" onChange={this.handleChange} name="x"></input>
                      <input type="text" id={i} placeholder="Y" onChange={this.handleChange} name="y"></input>
                      <input type="text" id={i} placeholder="W" onChange={this.handleChange} name="w"></input>
                      <input type="text" id={i} placeholder="H" onChange={this.handleChange} name="h"></input>
                      <input type="text" id={i} className="colorPlatform" placeholder="colorPlatform" onChange={this.handleChange} name="color"></input>
                    </div>
                })
            }
            Otras cosas:
                    <input type="text" placeholder="Name" onChange={this.handleChangeName} name="gameName"></input>
                    <input type="text" placeholder="speed" onChange={this.handleChangeSpeed} name="speed"></input>
                    <input type="text" placeholder="logic" onChange={this.handleChangeLogic} name="logic"></input>
                    <input type="text" placeholder="imageID" onChange={this.handleChangeImageID} name="imageID" value={this.state.imageID}></input>
                    <ImageAPI  findUrl={this.findUrl} />
                    
                    <button onClick={this.handleFormSubmit}>Submit</button>
                    {/* <input type="submit" value="Submit"/> */}
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



// import React, { Component } from 'react'
// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             arr: new Array(4).fill(0).map((e, i) => i + 1),
//             platforms: new Array(4).fill(0).map(() => (
//                 {
//                     x: "",
//                     y: "",
//                     w: "",
//                     h: "",
//                     color: " "
//                 }
//             ))
//         }
//     }
//     formSubmit = (e) => {
//         e.preventDefault();
//         //Aqui tienes que poner la llamada al service!
//         console.log(this.state.platforms);
//     }
//     changeInput = (e) => {
//         const { id, name, value } = e.currentTarget;
//         let newState = [...this.state.platforms];
//         newState[id][name] = value;
//         this.setState({ ...this.state, newState });
//     }
//     rangeValue = (e) => {
//         this.setState({
//             ...this.state,
//             arr: new Array(+e.currentTarget.value).fill(0).map((e, i) => i + 1),
//             platforms: new Array(+e.currentTarget.value).fill(0).map(() => (
//                 {
//                     x: "",
//                     y: "",
//                     w: "",
//                     h: "",
//                     color: " "
//                 }
//             ))
//         })
//     }
//     render() {
//         console.log(this.state.arr)
//         console.log(this.state.platforms);
//         return (
//             <React.Fragment>
//                 <input type="range" min="4" max="8" defaultValue="4" onChange={this.rangeValue} />
//                 <form onSubmit={this.formSubmit}>
//                     {
//                         this.state.arr.map((e, i) => (
//                             <div key={i}>
//                                 <label htmlFor="x">X:</label>
//                                 <input type="number" name="x" id={i} onChange={this.changeInput} value={this.state.platforms[i].x} />
//                                 <label htmlFor="y">Y:</label>
//                                 <input type="number" name="y" id={i} onChange={this.changeInput} value={this.state.platforms[i].y} />
//                                 <label htmlFor="w">W:</label>
//                                 <input type="number" name="w" id={i} onChange={this.changeInput} value={this.state.platforms[i].w} />
//                                 <label htmlFor="h">W:</label>
//                                 <input type="number" name="h" id={i} onChange={this.changeInput} value={this.state.platforms[i].h} />
//                                 <label htmlFor="color">Color:</label>
//                                 <input type="text" name="color" id={i} onChange={this.changeInput} value={this.state.platforms[i].color} />
//                             </div>
//                         ))
//                     }
//                     <input type="submit" />
//                 </form>
//             </React.Fragment>
//         )
//     }
// }