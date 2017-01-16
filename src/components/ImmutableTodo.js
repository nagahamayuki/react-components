import React from 'react'
import { Record, List } from 'immutable'

import { createStore } from 'redux'

/* redux *//* redux *//* redux *//* redux *//* redux *//* redux */
/* redux *//* redux *//* redux *//* redux *//* redux *//* redux */
/* redux *//* redux *//* redux *//* redux *//* redux *//* redux */
/* redux *//* redux *//* redux *//* redux *//* redux *//* redux */

/* redux - more small sample */

//action
/*const Add = {
  type: 'ADD',
  text: '1を追加しました'
}

//reducer
const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return{
        text: action.text
      }
    default:
      return state;
  }
}

//store
const store = createStore(Reducer)



store.dispatch(Add)
console.log(store.getState());
*/

/* Immutable *//* Immutable *//* Immutable *//* Immutable *//* Immutable */
/* Immutable *//* Immutable *//* Immutable *//* Immutable *//* Immutable */
/* Immutable *//* Immutable *//* Immutable *//* Immutable *//* Immutable */
/* Immutable *//* Immutable *//* Immutable *//* Immutable *//* Immutable */
/* Immutable *//* Immutable *//* Immutable *//* Immutable *//* Immutable */

const TodoRecord = Record({
  text: ''
})

const init = List([])

//action
const Add = {
  type: 'ADD',
  text: '1を追加しました'
}

//reducer
const Reducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD':
      return state.push(new TodoRecord({text: action.text}))
    default:
      return state;
  }
}

//store
const store = createStore(Reducer)



store.dispatch(Add)
store.dispatch(Add)
store.dispatch(Add)
console.log(store.getState());


export default class ImmutableTodoComponent extends React.Component{
  render(){
    return(
      <div>{store.getState()}</div>
    );
  }
}
