import React from 'react';
import axios from 'axios'

// api get request to fetch cards of a user
function getCards() {
  return fetch('http://127.0.0.1:8000/api/user/')
    .then(response => response.json())
    .catch(err => console.log(err))
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
        <a className="btn btn btn-outline-danger btn-sm" onClick={props.onArchive.bind(null, card_id)}>Archive</a>
      </div>
    </div>
  )
}

function DisplayCards(props){
  return(
    <div className="row">
      {props.cards.filter((card) => (
        !card.archived
      )).map((card) => (
        <div key={card.voucher} className="col-md-4">
          <Card className='profile-cards' card={card} onArchive={props.archive}/>
        </div>
      ))}
    </div>
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
    let token = 'NmQ6xoHfkxaFQIG8yTFz1TzMy73xsmoK0aLI0bxeNxSlXraBf5vi5fKeDmq2vnKK' 
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
      <div>
        <h1>Profile</h1>
        <DisplayCards 
        cards={this.state.cards}
        archive={this.handleArchive}
        />
      </div>
    )
  }
}

export default Profile;