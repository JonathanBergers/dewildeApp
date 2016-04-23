/**
 * Created by jonathan on 21-4-16.
 */

import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Divider from 'material-ui/lib/divider';
import FontIcon from 'material-ui/lib/font-icon';
import RemoveRedEye from 'material-ui/lib/svg-icons/image/remove-red-eye';

import {connect} from 'react-redux'
import RoseFilterContainer from './Filter'
import DropDownMenu from 'material-ui/lib/DropDownMenu';



export default class RoseFilterNav extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }


  handleToggle(){
    console.log('dude')
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle LeftNav"
          onTouchTap={this.handleToggle.bind(this)}
          onClick={this.handleToggle.bind(this)}
        />
        <LeftNav width={200} openRight={false} open={this.state.open} >
          <AppBar title="Filters"/>



          {(Object.keys(this.props.filters)).map((filter_key)=>{
            const filter = this.props.filters[filter_key]
            console.log(filter)
            return (

              <RoseFilterContainer filter_title={filter_key}/>
              )
          })}
          <Divider />
        </LeftNav>
      </div>
    );
  }


}




//
// function anus(state){
//   return {roses: state.roses.tables.roses}
// }
//
const RoseFilterNavContainer = connect(
  state =>({filters: state.roses.tables.filters})
)(RoseFilterNav)



export default RoseFilterNavContainer;
