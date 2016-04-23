
// ------------------------------------
// Constants
// ------------------------------------
export const TABLE_CHANGE = 'TABLE_CHANGE';

var update = require('react-addons-update')
// ------------------------------------
// Actions
// ------------------------------------
export function action_table_change (table_name, data): Action {
  return {
    type: TABLE_CHANGE,
    payload: {table_name: table_name, data: data}
  }
}




// ------------------------------------
// Action Handlers
// ------------------------------------
export function on_table_change(previous_state, action){
 
  var object = {}
  const table_name = action.payload.table_name
  object[table_name] = action.payload.data

  var new_state = update(previous_state, {tables: {$set: object}})
  console.log(' state is now ', new_state)
  return new_state

}



// Reducer
const initial_state = {tables: {roses: []}};
export function rose_reducer(previous_state = initial_state, action) {
  console.log('rose reducer previoust state: ' , previous_state, ' action: ' , action)
  switch (action.type){
    case TABLE_CHANGE: return on_table_change(previous_state, action)


  }
  return previous_state


}
