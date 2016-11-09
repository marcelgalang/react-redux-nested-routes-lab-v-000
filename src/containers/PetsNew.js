import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPet } from '../actions';

import { Link, browserHistory} from 'react-router';

class PetsNew extends Component {

  handleSubmit(e){
    e.preventDefault();

    const pet = {
      name: this.refs.name.value,
      description: this.refs.description.value
    }

    this.props.addPet(pet);
    browserHistory.push('/pets')
  }

  render(){
    return (
      <div className='col-md-8'>
        <h2>Add a Pet</h2>
        <form onSubmit={this.handleSubmit.bind(this) }>
          <input ref="name" placeholder="Name"/>
          <input ref="description" placeholder="Description"/>
          <input type="submit" />
        </form>
      </div>
  )

  }
}

function mapDispatchToProps(dispatch){
  return {
    addPet: bindActionCreators(addPet, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(PetsNew);
