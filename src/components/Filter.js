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

import DropDownMenu from 'material-ui/lib/DropDownMenu';



export default class RoseFilter extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange(event, index, value){
    this.setState({value});
  }

  render() {

    console.log(this.props.filter)
    return (
      <DropDownMenu key={this.props.key} value={this.state.value} onChange={this.handleChange}>
        {this.props.filter.options.map((option)=>{
          console.log(option)
          return <MenuItem value={option.value} primaryText={option.title} label={option.title}/>
        })
        }
      </DropDownMenu>
    );
  }


}


function map_state_to_props(state, ownProps){
  console.log(ownProps)
  return {filter: state.roses.tables.filters[ownProps.filter_title]}
}


const RoseFilterContainer = connect(
  map_state_to_props
)(RoseFilter)
//
//
//
export default RoseFilterContainer;
