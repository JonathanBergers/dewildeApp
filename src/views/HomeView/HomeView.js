/* @flow */
import React from 'react'
import Counter from '../../components/Counter'
import FirebaseContainer from '../../components/FirebaseContainer'
import {connect} from 'react-redux'

import RoseFilterNavContainer from '../../components/FilterNav'
import RoseGridListContainer from '../../components/RoseGridList'


import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


const CounterContainer = connect(
  state => ({ value: state.counter.counter }),
  dispatch => ({ onIncrement: () => dispatch(increment()) })
)(Counter)

import FlatButton from 'material-ui/lib/flat-button';

export class HomeView extends React.Component {

  render () {
    return (
      <div>
        <RoseFilterNavContainer />
        <h1>dude</h1>
        <FlatButton label="Default" />
        <RoseGridListContainer />
        <FirebaseContainer base_url = "https://sweltering-inferno-8401.firebaseio.com" table_name = 'roses'/>
        <FirebaseContainer base_url = "https://sweltering-inferno-8401.firebaseio.com" table_name = 'filters' store_name='filters' as_array = {false}/>


      </div>
    )
  }
}

export default HomeView
