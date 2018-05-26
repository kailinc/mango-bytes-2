import React, { Component } from 'react';

import chatImg from '../assets/chat.png';
import callImg from '../assets/call.png';

class Confirmation extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div>
        <div className="store confirmTable">
          <div className="cart-col confirm">
            <h1>Thank You For Your Order</h1>
            <h4>Order Number: #1231321321321 </h4>

            <p>This is the first step for you to git commit beautiful clean code to GitHub. To recieve your gains, you must plug a mouse to your computer, put your laptop underneath your pillow, and hold the mouse as you sleep. At night, Satoshi Nakamoto will recieve your pull request. Satoshi will take your mouse
            and grant you your gains. When you wake up you will feel webscale. #ES2018</p>
            <h4>Order Details</h4>
            <p>items</p>

            <h4>Your Gains</h4>
            <p>Dev Cred: +100</p>
            <p>Attributes: </p>

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


export default Confirmation;
