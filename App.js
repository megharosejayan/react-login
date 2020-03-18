import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./Box"
import AppBar from 'material-ui/AppBar';
//import Button from "./Button.js"
import RaisedButton from 'material-ui/RaisedButton';
import TimePicker from 'material-ui/TimePicker';
import possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import DatePicker from 'material-ui/DatePicker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Notice from './Notice'
import Settings from './Settings'
import Login from './Login'
import SignUp from './Signup'
import Home from './Home'




class App extends Component {

constructor(props){
  super(props)
  this.state={
    login:true
  }
}


// onSignUp(){
//   this.setState({login:false})
// }

// onLogin(){
//   this.setState({login:true})
// }



  render() {

  

    
    

    return (
      <div className="App">
      <AppBar
      iconElementLeft={
        <div>
              <DatePicker hintText="Date" mode="landscape" />
          <TimePicker
      hintText="Time"
    />

        </div>

      }
      // iconElementRight={
      //   <div>
      //     <RaisedButton label="SignUp" primary onClick ={this.onSignUp.bind(this)}/>
      //     <RaisedButton label="Login" primary onClick ={this.onLogin.bind(this)}/>
      //   </div>
      // }
        />  

        <BrowserRouter>
          <Switch>
            <Route path="/sign" component={SignUp} />
            <Route path="/set" component={Settings}/>
            <Route path="/notice" component={Notice}/>
            <Route path="/" component={Login}/>
          
          </Switch>
        </BrowserRouter>

       
       

      
        
        </div>
    );
  }
}

export default App;



/*{
        this.state.login ?  <Box title="Login" mode="l" />  : <Box title="SignUp" mode="s" />  
      }
       
}
     <div style={{display:'flex',flexDirection:'row'}}>
      {
        items
      }

      </div> 
      
      
       */
