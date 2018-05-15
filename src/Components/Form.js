import React, { Component  } from 'react';

import InputBox from './InputBox';
import UIMessage from '../Components/UIMessage';

class Form extends Component {
  render(){
    const inputs = this.props.fields.map((cur) => <InputBox label="EMAIL" size="half" updateValue={this.props.updateValue} value={this.props.firstName} field="email" type="email"/>)
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
