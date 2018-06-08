import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { clearCart, clearAttributes, updateId, clearProductTotal, updateProductFinal, resetDevCred } from '../actions/cart';

import chatImg from '../assets/chat.png';
import callImg from '../assets/call.png';

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartId: '',
      attributes: {},
      devCred: 0,
      items: []
    }
  }

  componentWillMount(){
    if (this.props.location.state) {
      this.setState({
        cartId: this.props.location.state.cartId,
        attributes: this.props.location.state.attributes,
        devCred: this.props.location.state.devCred,
        items: this.props.location.state.items
      })
      this.props.dispatch(clearCart())
      this.props.dispatch(clearAttributes())
      this.props.dispatch(updateId(''))
      this.props.dispatch(clearProductTotal())
      this.props.dispatch(updateProductFinal(0))
      this.props.dispatch(resetDevCred())
    }
  }


  render(){
    if (!this.props.location.state) {
      return (<Redirect to='/mango-bytes-2' />)
    }
    const items = this.state.items.map((cur, index) => {
      const backgroundImg = {
        backgroundImage: "url(" + cur.img + ")"
      }
      return (
        <div key={index} className='item-img-div'>
          <div className='item-img' style={backgroundImg}>
          </div>
          <div className='item-msg'>
            <Link to={{
              pathname: '/mango-bytes-2/item/' + cur.item_id,
              state: { itemId: cur.id }
            }}>{cur.name} x {cur.quantity}</Link>
          </div>
        </div>)
    })
    return(
      <div>
        <div className="store confirmTable">
          <div className="cart-col confirm">
            <h1>Thank You For Your Order</h1>
            <h4>Order Number: #{this.state.cartId} </h4>

            <p>This is the first step for you to git commit beautiful clean code to GitHub. To recieve your gains, you must plug a mouse to your computer, put your laptop underneath your pillow, and hold the mouse as you sleep. At night, Satoshi Nakamoto will recieve your pull request. Satoshi will take your mouse
            and grant you your gains. When you wake up you will feel webscale. #ES2018</p>
            <h4>Order Details</h4>
            <div className="confirmItems">
              {items}
            </div>
            <h4>Your Gains</h4>
            <div className="confirmAttr">
              <p>Dev Cred: <span>+{this.state.devCred}</span></p>
              {Object.keys(this.state.attributes).map((key, index) => <p key={index}>{key}: <span>+{this.state.attributes[key]}</span></p>)}
            </div>


          </div>
          <div className="order-col confirm">
            <div className="contact">
              <img src={callImg} alt='call'/>
              <span>CALL US</span>
              <p>1-010-010-1010</p>
              <p>4 am - 11 pm PT</p>
              <p>7 Days a Week</p>
            </div>
            <div className="contact">
              <img src={chatImg} alt='chat'/>
              <span>LIVE CHAT</span>
              <p>4 am - 11 pm PT</p>
              <p>7 Days a Week</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Confirmation);
