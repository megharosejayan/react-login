import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import{Link} from 'react-router-dom'


export default class Settings extends React.Component{
    render(){
        return(
            <div style={{textAlign:'center'}}>
                <h1>Settings</h1>
                <Link to="/"> <RaisedButton label="Home" /> </Link>

            </div>
        )
    }
}