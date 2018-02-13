import React, { Component  } from 'react';

class Banner extends Component {
  constructor() {
    super()
    this.state = {
      goal: '',
      goals: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState((prevState)=> {
      goals: prevState.goals.push(this.state.goal)
    })
    this.setState({
      goal: ''
    })
  }

  handleChange(e) {
    this.setState({
      goal: e.target.value
    })
  }

  render(){
    let goals = this.state.goals.map((goal, index) => <span className="goal" key={index}>{goal}</span> )
    return(
      <div className='banner'>
        <h5>2018 RESOLUTIONS</h5>
        <h1>WHAT DO YOU WANT TO MASTER?</h1>
        <p>Our goal is to help you succeed.</p>

        <div className="goals">
          { goals }
        </div>

        <div className="bottom">
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type='text' value={this.state.goal} onChange={this.handleChange}/>
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default Banner;
