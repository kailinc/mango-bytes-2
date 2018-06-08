import React, { Component  } from 'react';

import riseImg from '../assets/rise-and-code.jpg';
import hackathonImg from '../assets/hackathon.jpg';

import Greeting from '../Components/Greeting';
import Banner from '../Components/Banner';
import Aside from '../Components/Aside';

import userAPI from '../API/user';

class Home extends Component {
  constructor() {
    super()
    this.wakeBackEnd = this.wakeBackEnd.bind(this)
  }

  componentWillMount() {
    this.wakeBackEnd()
  }

  wakeBackEnd() {
    console.log('waking up backend')
    userAPI.signIn()
      .catch((err) => console.log(err))
  }

  render(props){
    window.alert("Hello! Welcome to Mango Bytes 2.0. This is a make believe e-commerce website for developers. There are items on this website you can purchase that will \"increase\" your coding ability. You can purchase experience in programming languages, stickers, swag, and drones on this website. Use the credit card number 4242-4242-4242 and any number for other fields to purchase items on this website. If you enjoyed this project please give it a star on GitHub.");
    return(
      <div>
        <Greeting />
        <Banner />
        <div className="aside-container">
          <Aside
            img={riseImg}
            headline='RISE AND CODE'
            message='The best way to start the day is with coffee, a computer, and good music.'
            hoverMsg='SHOP NOW' />
          <Aside
            img={hackathonImg}
            headline='HACKING AWAY'
            message='There is no better way to learn a new technology than to build with that technology.'
            hoverMsg='EXPLORE' />
        </div>
      </div>
    )
  }
}

export default Home;
