import React, { Component } from 'react';

import {Card, CardTitle} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg'
import AppBar from 'material-ui/AppBar/AppBar';
import Badge from 'material-ui/Badge';
import {Auth} from "./Config"


export default class Box extends Component {

    constructor(props){
        super(props)

        this.state={
            email:'',
            pass:""
            

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
        var mode  = this.props.mode


        mode === "s" ?
        Auth.createUserWithEmailAndPassword(this.state.email,this.state.pass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error",errorMessage);
            
            // ...
          })

        :
        Auth.signInWithEmailAndPassword(this.state.email,this.state.pass).then(function(user){
            if(user){
                console.log("Success!");
                
            }
        })
          
    }


    render(){
        return(
            <div>
              
              <Card style={{margin:'auto',width:'50%'}}>
                  <CardTitle title={this.props.title} />
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
              </Card>

               
            </div>
        )
    }
}