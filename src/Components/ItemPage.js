import React, { Component  } from 'react';

import API from '../API';

class ItemPage extends Component {
  constructor(){
    super()
    this.state = {
      item: {}
    }
  }

  componentWillMount(){
    API.getItem(this.props.match.params.id)
      .then((response) => {
        this.setState({
          item: response.data.item
        })
      })
      .catch((error)=> {
        console.log(error)
      })
  }

  render(){
    console.log('ItemPage this is match', )
    return(
      <div>
        Item Page: Item Id = {this.props.match.params.id}
      </div>
    )
  }
}

export default ItemPage;
