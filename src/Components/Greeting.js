import React, { Component  } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  render(props){
    return(
      <div>
        <Jumbotron className="home landingPic">
          <div className="greeting">
            <div className='top'>
              <h3>Calling All Developers</h3>
              <h1>TALKERS, TALK</h1>
              <h1><span>BUILDERS, BUILD</span></h1>
              <p>What if I told you, you can spend money to become a better developer?</p>
            </div>

            <div className="bottom">
              <Link to='/all'>SHOP ALL</Link>
              <Link to={{
                pathname: '/all',
                state: {
                  headline: 'points',
                  header: 'All Points',
                  msg: ['There was only a few ways to become better at a language or a framework: read the documentation, take a class about it, or write a project using it. What if I told you there was an easier way? A much faster way. Here on Mango Bytes 2.0, you can buy experience in those languages and frameworks. #NoWork ']
                }}}>POINTS</Link>
              <Link to={{
                pathname: '/all',
                state: {
                  headline: 'sticker',
                  header: 'All Stickers',
                  msg: ['You see them at Hackathons, Career Fairs, Meet ups, and events. They may appear to be a symbol of passion for development, a medium to boost ego, or art. However, they are more than that. Stickers just make you a better developer. The more you have the better you are as a coder']
                }}}>STICKERS</Link>
              <Link to={{
                pathname: '/all',
                state: {
                  headline: 'swag',
                  header: 'All Swag',
                  msg: ['Atheletes have jerseys. Rappers have sun glasses. Instagram Fitness Baes have followers. But we are Matheletes. We have SWAG! When we rock them, we feel legit. We represent a programming language, framework, company, or database PROUDLY! ']
                }
              }}>SWAG</Link>
              <Link to='/super-power'>SUPER POWER</Link>
              <Link to={{
                pathname: '/all',
                state: {
                  headline: 'misc',
                  header: 'All Miscellaneous',
                  msg: ['When you make it with Cryptocurrency, you buy a lambo. When you make it in Football, you get a tattoo. Youtube = Drones. BodyBuilder = Gym Shark Gear. Rapper = Gold Chains. Developers have different things they get when they make it. At heart, we are all kids just trying to have fun.']
                }
              }}>MISC</Link>
            </div>
          </div>

        </Jumbotron>
      </div>
    )
  }
}

export default Greeting;
