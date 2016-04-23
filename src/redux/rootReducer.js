import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import {counterReducer} from '../redux/modules/counter'
import {rose_reducer as roses} from '../redux/modules/roses'



export default combineReducers({
  router,
  roses

})
