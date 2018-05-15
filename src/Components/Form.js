import React, { Component  } from 'react';

import InputBox from './InputBox';
import UIMessage from '../Components/UIMessage';

class Form extends Component {
  render(){
    const inputs = this.props.fields.map((cur, index) => {
      let label = 'text'
      if (cur.label === 'email') {
        label = 'email';
      } else if (cur.label.includes('password') || cur.label === 'old' || cur.label === 'new') {
        label = 'password';
      }

      return <InputBox
        key={index}
        label={cur.label.toUpperCase()}
        size={cur.size}
        updateValue={this.props.updateValue}
        value={cur.value} field={cur.label}
        type={label}/>
    })

    return(
      <form className="signIn" onSubmit={this.props.onSubmit}>
        { this.props.uiDisplay ? <UIMessage type={this.props.uiType}
                                            msg={this.props.uiMsg}
                                            unmountMe={this.props.unmountMe} /> : null}
        {inputs}
        <button className='submit-button'>Submit</button>
      </form>
    )
  }
}

export default Form;
