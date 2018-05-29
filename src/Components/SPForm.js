import React, { Component } from 'react';
import { connect } from 'react-redux';

class SPForm extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let spClass = "spForm sp" + this.props.pos
    if (this.props.pos === 'Left' || this.props.pos === 'Right') {
      spClass += " spOverlay";
    }
    return(
      <div className={spClass}>
        <h3>Super Power</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam tellus, gravida sed tellus quis, pharetra luctus mi. Ut feugiat, metus id molestie dignissim, justo dolor porta augue, nec egestas ante dui eu diam. Curabitur non posuere metus. Pellentesque dictum nec enim et ultrices. Suspendisse efficitur euismod auctor.</p>
        <button className="promo-btn spBtn">Buy</button>
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

export default connect(mapStateToProps)(SPForm);
