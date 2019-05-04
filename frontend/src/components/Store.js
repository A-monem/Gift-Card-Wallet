import React from 'react';

function DisplayCard(props) {
    return (
        <img
            className='display_card'
            src={`../static/frontend/images/${props.product}.jpg`}
        />
    )
}

class Store extends React.Component {
    render() {
        let products=['coles', 'woolworths', 'priceline', 'bunnings']
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Gift Card Wallet</h1>
                    <p>Buy for yourself or send to a friend</p>
                    <a className="btn btn-outline-danger btn-sm" href="" role="button">Login</a>
                </div>
                <div className="store_cards">
                    <div className="container">
                        <div className="row">
                            {products.map((product) => (
                                <div className="col-md-3 m-0">
                                    <DisplayCard product={product}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>    
         </div>
        )
    }
}
                            
export default Store;