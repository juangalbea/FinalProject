import React, {Component} from 'react';

import './App.css';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import AuthServices from './Services/Services'
import ImageAPI from './components/ImageAPI/ImageAPI'
import Game from './components/Game/Game'
// import Comment from './components/Comment/Comment'
import "bulma/css/bulma.css";
import VideoGame from './components/VideoGame/VideoGame'
import Home from './components/Home/Home'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      loggedInUser: null,
    }
    this.service = new AuthServices();

  }

  componentDidMount() {
    this.service.loggedin().then(response => {
      console.log(response)
      this.getTheUser(response);
    })
  }

  getTheUser = (userObj) => {
      this.setState({...this.state,
        loggedInUser: userObj
      })
  }

  logout= (e) => {
    e.preventDefault()
    this.service.logout()
    .then(()=>{
      this.setState({
        loggedInUser: null
      }, () => {
        this.props.history.push("/login")
      })
    })
  }


  // fetchUser= () => {
  //   this.service.loggedin()
  //   .then(response=>{
  //     this.setState({
  //       loggedInUser: response
  //     })
  //   })
  // }


  
  render(){
    
    if(this.state.loggedInUser){
      return (
        <React.Fragment>
          <Switch>
            <Route exact path='/' render={()=><Home  />}/>
            <Route exact path='/game' render={()=><Game   />}/>
            <Route exact path='/videogame' render={()=><VideoGame   />}/>
            <Route exact path='/images' render={()=><ImageAPI   />}/>
            <Route exact path='/login' render={()=>{return <Redirect to="/profile" />}}/>
            <Route exact path='/profile' render={()=><Profile {...this.state.loggedInUser} logout={this.logout}/>}/>
            {/* <Route exact path='/comment' render={()=><Comment   />}/> */}
          </Switch>
        </React.Fragment>
      );
    }else{
      return (
        <React.Fragment>
          <Switch>
          <Route exact path='/' render={()=><Home  />}/>
            <Route exact path='/login' render={()=><Login {...this.state.loggedInUser} getUser={this.getTheUser}/>}/>
            <Route exact path='/signup' render={()=><Signup {...this.state.loggedInUser}/>}/>
            
           </Switch>
        </React.Fragment>
      )
    }
      
  }

}

export default withRouter(App);
