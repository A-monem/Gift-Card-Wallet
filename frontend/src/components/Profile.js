import React from 'react';

function getUser(){
    return fetch('http://127.0.0.1:8000/api/users')
        .then(response => console.log(response.json()))
}

function getCards(){
    return fetch('http://127.0.0.1:8000/api/wallets')
        .then(response => console.log(response.json()))
}

getUser()
getCards()

function getUserCards(){
 
}

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    )
  }
}

export default Profile;