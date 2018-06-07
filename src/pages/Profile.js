import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getNum } from '../helpers/attributes';
import itemAPI from '../API/item';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartId: '',
      FireFingers: '',
      PestControlla: '',
      DocKing: '',
      CoffeeAngel: '',
      TypNO: '',
      WalkingGoogle: ''
    }
  }

  componentWillMount(){
    itemAPI.getItems()
      .then((response) => response.data.items.filter((cur) => cur.category === 'superpowers'))
      .then((powers) => {
        powers.forEach((cur) => {
          const name = cur.name
          this.setState({
            [name]: cur.img
          })
        })
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  render(){
    const attributes = ['JavaScript', 'BootStrap', 'Html','Css', 'Python', 'Django', 'Ruby', 'Rails', 'C', 'Java', 'Go', 'Ember', 'Node', 'MongoDB', 'Sql', 'Angular', 'React' ]
    const attributesContent = attributes.map((cur, index) => {
      const level = this.props.user[cur]
      const tileNum = getNum(level)
      let glow = "Glow"
      if (tileNum >= 7) {
        glow = " gold" + glow
      }
      return (
          <div key={index} className="badgeContainer">
            <span className={ glow+ " tile tile" +tileNum}>
            </span>
            <p className={"tileLabel label" +tileNum}>{cur}</p>
            <p className={"label" + tileNum}>{level}</p>
          </div>)
    })
    const powers = ['FireFingers', 'PestControlla', 'DocKing', 'CoffeeAngel', 'TypNO', 'WalkingGoogle']
    let powersContent = powers.map((cur, index) => {
      return (
        <div key={index} className='superPowerContainer'>
          <h3 className='spLabel'>{cur}</h3>
          <img src={this.state[cur]}/>
        </div>
      )
    })
    return(
      <div>
        <div className="profile landingPic">
          <div className="profileLabel">
            <div>
              <span className="coderName">{this.props.user.coderName || 'codername'}</span>
            </div>
            <div className="profileDes">
              <h3>{this.props.user.firstName || 'First'}</h3>
              <h3>{this.props.user.lastName || 'Last'}</h3>
              <h3>{this.props.user.devCred || 'DevCred: 0'}</h3>
            </div>
          </div>
        </div>
        <h1 className="profHeader">Attributes</h1>
        <div className="tiles">
          {attributesContent}
        </div>
        <h1 className="profHeader">Super Power</h1>
        <div className="tiles">
          {powersContent}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    user: state.user
  };
};

export default connect(mapStateToProps)(Profile);
