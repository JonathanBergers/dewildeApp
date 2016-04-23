/* @flow */
import React from 'react'
import Counter from '../../components/Counter'
import FirebaseContainer from '../../components/FirebaseContainer'
import {connect} from 'react-redux'
import {increment} from '../../redux/modules/counter'
import Rebase from 're-base'
var base = Rebase.createClass("https://sweltering-inferno-8401.firebaseio.com");

import RoseGridListContainer from '../../components/RoseGridList'

import RoseFilter from '../../components/FilterNav'


const CounterContainer = connect(
  state => ({ value: state.counter.counter }),
  dispatch => ({ onIncrement: () => dispatch(increment()) })
)(Counter)

import FlatButton from 'material-ui/lib/flat-button';

export class HomeView extends React.Component {

  render () {
    return (
      <div>
        <RoseFilter />
        <h1>dude</h1>
        <FlatButton label="Default" />
        <RoseGridListContainer />
        <FirebaseContainer base_url = "https://sweltering-inferno-8401.firebaseio.com" table_name = 'roses'/>


      </div>
    )
  }
}

export default HomeView
