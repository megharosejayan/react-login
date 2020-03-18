import React, { Component } from 'react';

import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg'
import AppBar from '../node_modules/material-ui/AppBar/AppBar';
import Badge from 'material-ui/Badge';
import {Auth} from "./Config"
import{Link,Redirect} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar';


export default class Login extends Component {

    constructor(props){
        super(props)

        this.state={
            email:'',
            pass:"",
            open:false,
            red:false
            

        }
    }

    onEmail(e,s){
        this.setState({email:s})
        //console.log("email:",s);
        
    }
    onPass(e,s){
        this.setState({pass:s})
    }
    onSub()
    {
      var that=this;

        
        Auth.signInWithEmailAndPassword(this.state.email,this.state.pass).then(function(user){
            if(user){
                console.log("Success!");

                that.setState({open:true,red:true})
                
            }
        })
          
    }


    render(){
        return(
            <div style={{ backgroundColor:'lightBlue'}} >
              
              <Card style={{margin:'auto',width:'50%'}}>
                  <CardTitle title="Login" />
                   <Badge badgeContent={"M"}
                        secondary={true}>
                        </Badge>
                           

                  <br/> 

                  <img src="https://picsum.photos/120/120/?random" />
                  <br />
                  <br />
                  <TextField floatingLabelText="Email" onChange={this.onEmail.bind(this)} />
                  <br />
                  <br />
                  <TextField floatingLabelText="Password" type ="password"  onChange={this.onPass.bind(this)}/>
                  <br />
                  <br />
                  <RaisedButton label="Submit" primary onClick={this.onSub.bind(this)} />
                  <br/>
                  <br />
                  <Link to="/sign"><FlatButton label="Not a User? Signup"/></Link>
                  <br/>
                  <br/>
                  <br />
              </Card>
              <Snackbar open={this.state.open} autoHideDuration={3000} message="Login Success!" />

               {this.state.red?<Redirect to="/notice"/>:null}
            </div>
        )
    }
}