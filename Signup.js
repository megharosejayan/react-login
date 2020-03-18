import React, { Component } from 'react';

import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg'
import AppBar from '../node_modules/material-ui/AppBar/AppBar';
import Badge from 'material-ui/Badge';
import {Auth} from "./Config"
import{Link} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar';

export default class Signup extends Component {

    constructor(props){
        super(props)

        this.state={
            email:'',
            pass:"",
            open:false
            

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
         var that = this;

    
        Auth.createUserWithEmailAndPassword(this.state.email,this.state.pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error",errorMessage);
            
            // ...
          

       
        }).then(
            function(data){
                that.setState({open:true})

            }
        )
          
    }


    render(){
        return(
            <div>
              
              <Card style={{margin:'auto',width:'50%'}}>
                  <CardTitle title="Signup" />
                   <Badge badgeContent={"M"}
                        secondary={true}>
                        </Badge>
                           

                  <br/> 

                  <img src="https://picsum.photos/120/120/?random" />
                  <br />
                  <TextField floatingLabelText="Email" onChange={this.onEmail.bind(this)} />
                  <br />
                  <TextField floatingLabelText="Password" type ="password"  onChange={this.onPass.bind(this)}/>
                  <br />
                  <RaisedButton label="Submit" primary onClick={this.onSub.bind(this)} />
                  <br/>
                  <Link to="/"><FlatButton label="Already a User? Login"/></Link>

              </Card>
              <Snackbar open={this.state.open} autoHideDuration={3000} message="Sign up Successfull"/>


               
            </div>
        )
    }
}