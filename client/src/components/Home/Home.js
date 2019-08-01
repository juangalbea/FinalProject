import React, { Component } from "react";
import Elements from "../../Services/Elements";
import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from "react-materialize";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allGames: null
    };
    this.service = new Elements();
  }

  getGames() {
    this.service
      .getgameF()
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          allGames: res
        });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getGames();
  }
  render() {
    console.log(this.state.allGames);
    return (
      <React.Fragment>
        {this.state.allGames ? (
          <Carousel
            options={{ indicators: true, duration: 200 }}
            images={this.state.allGames.map((game, i) => {
              return game.imageID;
            })}
          />
        ) : (
          <h3>Loading...</h3>
        )}

<div class="modal" >
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
    

    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
        <button>Login</button>
        <button>Sign up</button>
      </React.Fragment>
    );
  }
}

// ReactDOM.render(<Home />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
// {this.state.allGames.map((game, i) => {
//   return  game.imageID

// })}
