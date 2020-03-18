import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import{Link,Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import {db,Auth} from './Config'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import Checkbox from 'material-ui/Checkbox';


const styles = {
    block: {
    // maxWidth: 25,
     height: 100,
     paddingLeft: 100,
     width: 100
   },
  checkbox: {
      width: 50,
      marginLeft: 100,
     marginBottom: 160,
    },
  };
 



export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            first: '',
            last: '',
            open:false,
            data:[],
            uid:" ",
            red:false

        }
    }

    componentDidMount(){

        var that = this;

        Auth.onAuthStateChanged(function(user){
            if(user){
                console.log("user",user.uid)
                that.setState({uid:user.uid})
                db.ref('notices').child(user.uid).on('value',function(data){
                    var list = []
                    data.forEach(function(child){
                        list.push(child.val())
        
                    })
                    that.setState({data:list.reverse()})
        
                    console.log("data", that.state.data)
        
            })

        }

        
        })

        

    }

    onFirst=(e,s) =>
    {
        this.setState({first:s})
    }

    onLast=(e,s) =>
    {
        this.setState({last:s})
    }

    onSub = () =>
    {
        this.setState({open: false});

        var data={
            title:this.state.first,
            desc:this.state.last
        }
        db.ref('notices').child(this.state.uid).push().set(data)

    }

    handleClose = () => {
        this.setState({open: false});
      };
    
    onAdd =() => {
        this.setState({ open:true});
    }

    onSignout = () =>{
        Auth.signOut
        this.setState({red:true})

    }



    render(){



        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.onSub}
            />,
          ];

          const notices=[]
          const list=this.state.data
          for (let i = 0; i < list.length; i++) {
              
            notices.push(
        
            
                
              /*  <Card style={{height: 200,
                width: 200,
                margin: 20,
                textAlign: 'center',
                display: 'inline-block',
                }}
              >
                    <CardHeader
                title={list[i].title}
                actAsExpander={true}
                showExpandableButton={true} />
                
                <CardText expandable={true}>
                
                 {list[i].desc} 
                 
                 </CardText>
                </Card> */
                <div style={{textAlign:'center'}}>
            
            <Checkbox
              label={list[i].title}
              style={styles.checkbox}
            />
            </div>
            )

            
              
                    
              
          }
      
      
        return(
            
            
        
            
        
    
            <div style={{textAlign:'center'}}>
            <div>
                <h1>Information</h1><br/>\
                <RaisedButton label="SignOut" onClick={this.onSignout} style={{ float:"right", margin: 30}}/>
            </div>    
                  <List style={{width:'50%',margin:'auto', textAlign:'left'}}>
                      {notices}
                  </List>

                <FloatingActionButton onClick={this.onAdd}>
                    <ContentAdd />
                </FloatingActionButton>

                <Dialog
          title="Add a todo"
          actions={actions}
          modal={false}
          open={this.state.open}
          
        >
                <TextField floatingLabelText="Title" onChange={this.onFirst} />

            </Dialog>

    
        


        {this.state.red?<Redirect to='/' />:null}

             
            </div>
        )
    }
}

//<Link to="/set"> <RaisedButton label="settings" /> </Link>
/* <TextField floatingLabelText="First Name" onChange={this.onFirst}/>
             <br />
             <TextField floatingLabelText="Last Name" onChange={this.onLast}/>
             <br />
             <RaisedButton label="Submit" onClick={this.onSub}/>
             
             
             
             
             
             <ListItem
                 primaryText={list[i].title} 
                 primaryTogglesNestedList={true} 
                 nestedItems={[<ListItem primaryText={list[i].desc} />]} />
                 
                 */
