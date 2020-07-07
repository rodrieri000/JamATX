import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      allUsers: []
    }
  }

  componentDidMount = () => {
    this.getAllUsers()
  }
  getAllUsers = () => {
    let getAllUser = "https://jamatx.herokuapp.com/users/getAll"
    fetch(getAllUser)
    .then(res => res.json())
    .then(data => {
      if(data){
        this.setState({
          allUsers: data
        })
      }

    })
  }

  render() {
    return (
      <div className="App">
        
      

    </div>
    );
  }
}

export default App;
