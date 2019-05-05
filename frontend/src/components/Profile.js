import React from 'react';
import axios from 'axios'

// api get request to fetch cards of a user
function getCards() {
  return fetch('http://127.0.0.1:8000/api/user/')
    .then(response => response.json())
    .catch(err => console.log(err))
}

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = jQuery.trim(cookies[i]);
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
function Card(props) {
  let productName = (props.card.product).toLowerCase()
  let imageUrl = `../static/frontend/images/${productName}.jpg`
  let card_id = props.card.id
  return (
    <div className="card">
      <img src={imageUrl} alt={props.card.product}/>
      <div className="card-body">
        <h5 className="card-title">{props.card.product}</h5>
        <p className="card-text">value: $ { props.card.value }</p>
        <p className="card-text">voucher number: { props.card.voucher }</p>
        <p className="card-text">PIN: { props.card.pin }</p>
        <p className="card-text">Description: { props.card.description }</p>
        {props.active && <a className="btn btn btn-outline-danger btn-xs" onClick={props.onArchive.bind(null, card_id)}>Activate</a>}
        {!props.active && <a className="btn btn btn-outline-danger btn-xs" onClick={props.onArchive.bind(null, card_id)}>Archive</a>}
      </div>
    </div>
  )
}
// {info.name && <li>{info.name}</li>}
function DisplayCards(props){
  return(
      props.cards.filter((card) => (
        card.archived === props.active
      )).map((card) => (
        <div className="row">
          <div key={card.voucher} className="col">
            <Card className='profile-cards' card={card} onArchive={props.archive} active={props.active}/>
          </div>
        </div>
      ))
    
  )
}

class Profile extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      cards: []
    }
    this.handleArchive = this.handleArchive.bind(this) //binding this keyword to the object Profile
    this.handleGetRequest = this.handleGetRequest.bind(this)
    this.putCard = this.putCard.bind(this)
  };

  handleGetRequest(){
    getCards().then((cards) => {
      console.log(cards)
      this.setState(() => {
        return {
          cards: cards
        }
      })
    })
  }

  putCard(card, card_id) {
    let token = getCookie('csrftoken') //getting csrftoken required to put data into DB
  
    return axios({
      method: 'put',
      url: `http://127.0.0.1:8000/api/${card_id}/update/`,
      data: JSON.stringify(card),
      headers: {
        "X-CSRFToken": token,
        "Content-Type": "application/json" 
      }
    }).then(() => this.handleGetRequest())
  }

  handleArchive(id){
    let card = this.state.cards.filter((card) => ( 
      card.id === id  //return an array of the selected card object
    ))
    //toggle the archive flag
    card[0].archived
    ? card[0].archived = false
    : card[0].archived = true
   //call the put method 
    this.putCard(card[0],id)
  }

  componentDidMount(){ 
      this.handleGetRequest() //load cards after rendring and mounting DOM
  }
  
  render(){
    return (
      <div className='row'>
        <div className="col-md-6">
          <h5>Active Cards</h5>
          <DisplayCards 
          cards={this.state.cards}
          archive={this.handleArchive}
          active = {false}
          />
        </div>
        <div className="col-md-6">
        <h5>Archived Cards</h5>
        <DisplayCards 
        cards={this.state.cards}
        archive={this.handleArchive}
        active = {true}
        />
        </div>
    </div>
    )
  }
}

export default Profile;