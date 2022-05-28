/*
包含n个reducer函数: 根据老的state和指定的action返回一个新的state
 */
import {combineReducers} from 'redux'

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
} from './action-types'



const initUser = {
  username: '', // 用户名
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动重定向的路由路径
}
// 产生user状态的reducer
function user(state=initUser, action) {
  console.log("@@@reducers_action",action)
  switch (action.type) {
    case AUTH_SUCCESS: // data是user
      console.log("@@@reducers_login",action.data)
      return {...action.data, redirectTo: 'xxx'} //需要重定向的位置
    case ERROR_MSG: // data是msg
      return {...state, msg: action.data}
    case RECEIVE_USER: // data是user
      return action.data
    case RESET_USER: // data是msg
      return {...initUser, msg: action.data}
    default:
      return state
  }
}


const initUserList = []
// 产生userlist状态的reducer
function userList(state=initUserList, action) {
  switch (action.type) {
    case RECEIVE_USER_LIST:  // data为userList
      return action.data
    default:
      return state
  }
}



export default combineReducers({
  user,
  userList,
})
// 向外暴露的状态的结构: {user: {}, userList: [], chat: {}}

