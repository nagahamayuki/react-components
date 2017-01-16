import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'

import {firebaseDb} from '../../firebase/index.js'
const ref = firebaseDb.ref('react-component');
console.log(ref);

/* Redux */
//action
let newId = 0;
const AddChat = (text) => {
  return{
    type: 'ADD_CHAT',
    id: newId ++,
    text
  }
}

//reducer
const chat = (state, action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state;
  }
}
const chats = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      return[
        ...state,
        chat(undefined, action)
      ]
    default:
      return state;
  }
}

const ChatReducer = combineReducers({ chats })

//store
const store = createStore(ChatReducer);

class Components extends React.Component{
  render(){
    let input;
    const { chats, chatAddClick } = this.props;
    return(
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          chatAddClick(input.value)
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
        <button type="submit">追加</button>
        </form>

        <ul>
          {
            this.props.chats.map((chat) =>
              <li key={chat.id}>{chat.text}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

//接続
const mapStateToProps = (state) => {
  return{
    chats: state.chats
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    chatAddClick:(value) => {dispatch(AddChat(value))}
  }
}

const ChatComponentContents = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components)

export default class ChatComponent extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <ChatComponentContents />
      </Provider>
    )
  }
}

//標準
store.dispatch(AddChat("chat1"))
