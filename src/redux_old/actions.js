/*
包含n个action creator
异步action
同步action
 */

import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_USER_LIST,
} from './action-types'
import {
  reqRegister,
  reqLogin,
  reqUpdateUser,
  reqUser,
} from '../api/register'

/*
单例对象
1. 创建对象之前: 判断对象是否已经存在, 只有不存在才去创建
2. 创建对象之后: 保存对象
 */




// 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})
// 接收用户的同步action
const receiveUser = (user) => ({type: RECEIVE_USER, data:user})
// 重置用户的同步action
export const resetUser = (msg) => ({type: RESET_USER, data: msg})
// 接收用户列表的同步action
const receiveUserList = (userList) => ({type: RECEIVE_USER_LIST, data: userList})


// 注册异步action
export const register = (user) => {
  const {username, password, password2} = user
  // 做表单的前台检查, 如果不通过, 返回一个errorMsg的同步action
  if(!username) {
    return errorMsg('用户名必须指定!')
  } else if(password!==password2) {
    return errorMsg('2次密码要一致!')
  }
  // 表单数据合法, 返回一个发ajax请求的异步action函数
  return async dispatch => {


    // 发送注册的异步ajax请求
    /*const promise = reqRegister(user)
    promise.then(response => {
      const result = response.data  // {code: 0/1, data: user, msg: ''}
    })*/
    const response = await reqRegister({username, password})
    const result = response.data //  {code: 0/1, data: user, msg: ''}
    if(result.code===0) {// 成功
    //   getMsgList(dispatch, result.data._id)
      // 分发授权成功的同步action
      dispatch(authSuccess(result.data))
    } else { // 失败
      // 分发错误提示信息的同步action
      dispatch(errorMsg(result.msg))
    }
  }
}

// 登陆异步action
export const login = (user) => {

  const {username, password} = user
  console.log('login_user',user)
  // 做表单的前台检查, 如果不通过, 返回一个errorMsg的同步action
  if(!username) {
    return errorMsg('用户名必须指定!')
  } else if(!password) {
    return errorMsg('密码必须指定!')
  }

  return async dispatch => {
    // 发送注册的异步ajax请求
    /*const promise = reqLogin(user)
    promise.then(response => {
      const result = response.data  // {code: 0/1, data: user, msg: ''}
    })*/
    const response = await reqLogin(user)
    console.log('###actions_response',response)
    const status = response.status
    const status_text = response.statusText
    // const result = response.data
    if(status===200) {// 成功
    //   getMsgList(dispatch, result.data._id)
      // 分发授权成功的同步action
      console.log('分发授权成功的同步action')
      dispatch(authSuccess(status_text))
    } else { // 失败
      // 分发错误提示信息的同步action
      dispatch(errorMsg(status_text))
    }
  }
}

// 更新用户异步action
export const updateUser = (user) => {
  return async dispatch => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if(result.code===0) { // 更新成功: data
      dispatch(receiveUser(result.data))
    } else { // 更新失败: msg
      dispatch(resetUser(result.msg))
    }
  }
}

// 获取用户异步action
export const getUser = () => {
  return async dispatch => {
    // 执行异步ajax请求
    const response = await reqUser()
    const result = response.data
    if(result.code===0) { // 成功
    //   getMsgList(dispatch, result.data._id)
      dispatch(receiveUser(result.data))
    } else { // 失败
      dispatch(resetUser(result.msg))
    }
  }
}

// 获取用户列表的异步action
// export const getUserList = (type) => {
//   return async dispatch => {
//     // 执行异步ajax请求
//     const response = await reqUserList(type)
//     const result = response.data
//     // 得到结果后, 分发一个同步action
//     if(result.code===0) {
//       dispatch(receiveUserList(result.data))
//     }
//   }
// }

