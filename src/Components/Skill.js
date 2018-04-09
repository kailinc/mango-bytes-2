import React, { Component  } from 'react';

import { connect } from 'react-redux';
import { getAttr } from '../helpers/cart';
import Attribute from './Attribute';

class Skill extends Component {
  render(){
    // const attribute = getAttr(this.props.cart.attributes, this.props.skill)
    const exp = this.props.user.token ? this.props.user[this.props.skill] : 0
    // const num = this.props.user.token ? attribute: 0
    // return(
    //   <div>
    //     <p>{this.props.skill}: {exp} <Attribute num={num}/></p>
    //   </div>
    // )
    return(
      <div>
        <p>{this.props.skill}: {exp}</p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cart: state.cart,
    user: state.user
  };
};

export default connect(mapStateToProps)(Skill);
