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




export default class RoseFilter extends React.Component  {

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
          <MenuItem primaryText="Preview" leftIcon={<RemoveRedEye />} />
          <MenuItem primaryText="Share" leftIcon={<RemoveRedEye />} />
          <MenuItem primaryText="Get links" leftIcon={<RemoveRedEye />} />
          <Divider />

          <MenuItem primaryText="Share" leftIcon={<RemoveRedEye />} />
          <MenuItem primaryText="Get links" leftIcon={<RemoveRedEye />} />
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
// const RoseGridListContainer = connect(
//   anus
// )(RoseGridList)



// export default RoseGridListContainer;
