import React, { Component  } from 'react';

import InputBox from './InputBox';
import UIMessage from '../Components/UIMessage';

class Form extends Component {
  render(){
    const inputs = this.props.fields.map((cur) => <InputBox label={cur.label.toUpperCase()} size={cur.size} updateValue={this.props.updateValue} value={cur.value} field={cur.label} type={cur.label != 'email' || cur.label != 'passoword' ? cur.label : 'text'}/>)
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
