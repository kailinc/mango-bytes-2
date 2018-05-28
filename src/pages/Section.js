import React, { Component } from 'react';

import Shop from './Shop';

class Section extends Component {
  constructor(){
    super()
    this.state =  {
      section: '',
      headline: '',
      header: '',
      msg: ['']
    }
    this.updateContent = this.updateContent.bind(this)
  }

  componentWillMount() {
    const location = window.location.pathname.substring(1)
    this.setState({
      section: location
    })
    this.updateContent(location);
  }

  updateContent(location) {
    switch(location) {
      case 'points':
        this.setState({
          headline: 'points',
          header: 'All Points',
          msg: ['There was only a few ways to become better at a language or a framework: read the documentation, take a class about it, or write a project using it. What if I told you there was an easier way? A much faster way. Here on Mango Bytes 2.0, you can buy experience in those languages and frameworks. #NoWork ']
        })
        break;
      case 'stickers':
        this.setState({
          headline: 'sticker',
          header: 'All Stickers',
          msg: ['You see them at Hackathons, Career Fairs, Meet ups, and events. They may appear to be a symbol of passion for development, a medium to boost ego, or art. However, they are more than that. Stickers just make you a better developer. The more you have the better you are as a coder']
        })
        break;
      case 'swag':
        this.setState({
          headline: 'swag',
          header: 'All Swag',
          msg: ['Atheletes have jerseys. Rappers have sun glasses. Instagram Fitness Baes have followers. But we are Matheletes. We have SWAG! When we rock them, we feel legit. We represent a programming language, framework, company, or database PROUDLY! ']})
        break;
      case 'misc':
        this.setState({
          headline: 'misc',
          header: 'All Miscellaneous',
          msg: ['When you make it with Cryptocurrency, you buy a lambo. When you make it in Football, you get a tattoo. Youtube = Drones. BodyBuilder = Gym Shark Gear. Rapper = Gold Chains. Developers have different things they get when they make it. At heart, we are all kids just trying to have fun.']
        })
        break;
      default:
        this.setState({
          headline: 'all',
          header: 'Everything',
          msg: ['Here is everything you need to become a better coder. We have experience in programming languages/frameworks, stickers, swag, miscellaneous, and super powers. We have what you need.']
        })
    }
  }
  render() {
    return(
      <Shop
        headline={this.state.headline}
        header={this.state.header}
        msg={this.state.msg}/>
    )
  }
}

export default Section;
