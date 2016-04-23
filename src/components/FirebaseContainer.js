import React , {PropTypes} from 'react'
import {connect, dispatch} from 'react-redux'
import Rebase from 're-base'
import TABLE_CHANGE from '../redux/modules/roses'
import {action_table_change} from '../redux/modules/roses'


export class FirebaseContainer extends React.Component {

  static contextTypes = {
    store: PropTypes.object
  }

  constructor(props){
    super(props)
    var base = Rebase.createClass(props.base_url)
    var store_name = props.table_name
    var as_array = true
    if(props.store_name != undefined){
      store_name = props.store_name
    }
    if(props.as_array != undefined){
      as_array = props.as_array
    }
    this.state = {base : base, table_name: props.table_name, store_name: store_name, as_array: as_array}

  }
  static propTypes = {
    table_name: PropTypes.string.isRequired,
    base_url: PropTypes.string.isRequired,

  };

  componentDidMount(){
    this.state.base.listenTo(this.state.table_name, {
      context: this,
      asArray: this.state.as_array,
      then(data){
        console.log(data)
        this.context.store.dispatch(action_table_change(this.state.store_name, data))
      }
    })
  }

  render(){

    return (<div></div>);
  }
}

export default FirebaseContainer
