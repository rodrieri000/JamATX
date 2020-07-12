import React, { Component } from 'react';
import './App.css';
import { Container, Paper } from '@material-ui/core'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      allUsers: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('https://jamatx.herokuapp.com/users/getAll')
    .then(response => {return response.json();})
    .then(json => {
      this.setState({ 
        users: json.results 
    });
    console.log(this.state.users)
    })
  }


  // componentDidMount = () => {
  //   this.getAllUsers()
  // }
  // getAllUsers = () => {
  //   let getAllUser = "https://jamatx.herokuapp.com/users/getAll"
  //   fetch(getAllUser)
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data){
  //       this.setState({
  //         allUsers: data
  //       })
  //     }

  //   })
  // }

  render() {
    return (
      <div className="App"> 
        <div className="Contacts">
            {this.state.users.map((user, i) => {
            return (
              <div className="Box" key={i}>
                <h3>{`${user.first_name} ${user.last_name}`}</h3>
              </div>
            )
          })}
        </div>        
      </div>
    );
  }
}
export default App;
