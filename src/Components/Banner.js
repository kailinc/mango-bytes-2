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
    let goal = this.state.goal
    this.setState((prevState)=> {
      goals: prevState.goals.push(goal)
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
    let goals = this.state.goals.map((goal) => <span className="goal">{goal}</span> )
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
            <input type='text' value={this.state.goal} onChange={this.handleChange}/>
          </form>
        </div>

      </div>
    )
  }
}

export default Banner;
