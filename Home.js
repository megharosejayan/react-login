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
//import { url } from 'inspector';

export default class Home extends Component {

    render()
    {

    return(
         <div style={{backgroundColor: 'blue', backgroundImage:'url("https://picsum.photos/120/120/?random")',background:'no-repeat'}} >
         <h1>
             hello
         </h1>
         
         </div>
    
    )

}
}