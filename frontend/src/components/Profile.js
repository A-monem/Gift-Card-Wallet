import React from 'react';

// api get request to fetch cards of a user
function getCards() {
  return fetch('http://127.0.0.1:8000/api/wallets/user/')
    .then(response => response.json())
    .catch(err => console.log(err))
}

function Card(props) {
  let productName = (props.card.product).toLowerCase()
  let imageUrl = `../static/frontend/images/${productName}.jpg`
  return (
    <div className="card" style={{color: '#d0021b', width: '16rem'}}>
      <img src={imageUrl} alt={props.card.product}
        style={{width: '100%', height:'100%'}}/>
      <div className="card-body">
        <h5 className="card-title">{props.card.product}</h5>
        <p className="card-text">value: $ { props.card.value }</p>
        <p className="card-text">voucher number: { props.card.voucher }</p>
        <p className="card-text">PIN: { props.card.pin }</p>
        <p className="card-text">Description: { props.card.description }</p>
        <a className="btn btn btn-outline-danger btn-sm" href="">Archive</a>
      </div>
    </div>
  )
}

function DisplayCards(props){
  return(
    <div className="row">
      {props.cards.map((card) => (
        <div key={card.voucher} className="col-md-4">
          <Card className='profile_cards' card={card}/>
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
  };
  
  componentDidMount(){
    getCards().then((cards) => {
      console.log(cards)
      this.setState(() => {
        return {
          cards: cards
        }
      })
    })
  }
  
  render(){
    return (
      <div>
        <h1>Profile</h1>
        <DisplayCards cards={this.state.cards}/>
      </div>
    )
  }
}

export default Profile;