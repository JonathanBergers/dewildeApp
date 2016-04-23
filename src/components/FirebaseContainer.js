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
    this.state = {base : base, table_name: props.table_name}

  }
  static propTypes = {
    table_name: PropTypes.string.isRequired,
    base_url: PropTypes.string.isRequired
  };

  componentDidMount(){
    this.state.base.listenTo(this.state.table_name, {
      context: this,
      asArray: true,
      then(data){
        console.log(data)
        this.context.store.dispatch(action_table_change(this.state.table_name, data))
      }
    })
  }

  render(){

    return (<div></div>);
  }
}

export default FirebaseContainer
