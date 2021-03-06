import React, { Component } from 'react';
import Home from '../components/Home';
import {connect} from 'react-redux';

import { fetchUser } from "../actions/userActions"
import '../../public/style/style.scss';

@connect((store)=>{
  return{
    user: store.user.user,
    userFetched: store.user.fetched
  }
})
class MainContainer extends Component {

  // Set initial state
  constructor(props) {
		super(props);

	}
  componentWillMount() {
    // this.props.dispatch(fetchUser())
  }


  render () {
    return (
      <div>
        <div>
          <Home/>
        </div>
        {this.props.children}
      </div>
    );
  };
};

export default MainContainer;