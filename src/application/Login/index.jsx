import React, { Component,useState,useEffect } from 'react'
import { Input,Button } from '@douyinfe/semi-ui';
import { IconUnlock,IconUser } from '@douyinfe/semi-icons';
// import {connect} from 'react-redux'
// import {login} from '../../redux_old/actions'
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { asyncLogin } from '../../store/slice/loginSlice';
import Welcome from '../Welcome';
import "./style.css"
import cookie from "react-cookies";

function Login(){
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  // const [redirectTo,setRedirecTo] = useState('')
  // useEffect(() => {
  //   setRedirecTo(cookie.load('redirectTo'))
  //     if(redirectTo){
  //       console.log(redirectTo);
  //       history(redirectTo)
  //     }
  // },[redirectTo])

  // const { redirectTo } = useSelector((state) => {
  //   return {
  //     redirectTo: state.loginData.redirectTo,
  //   };
  // });
  // useEffect(() => {
  //   return () => {
  //     redirectTo=''
  //   }
  // },[])

  // 注册成功后返回重定向的路由（重定向到主页/home）
  const history = useNavigate();
  // if(redirectTo){
  //   console.log(redirectTo);
  //   history(redirectTo)
  // }
  const dispatch = useDispatch();
  function handleChange(value,e){
    let key = e.target.name;
    if(key==='username'){
      setUsername(value)
    }else if(key==='password'){
      setPassword(value)
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    let user = {'username':username,'password':password}
    console.log(user);
    let p = dispatch(asyncLogin(user));
    p.then(()=>{
      console.log('dispatch_later---');
      history('/')
    })
    
  }
  return (
    <div className="login_content">
          
      <Welcome/>
      <br/><br/>
      <Input 
          placeholder='请输入用户名' 
          prefix={<IconUser />}
          name="username"
          onChange={handleChange}
        ></Input>
      <br/><br/>
      <Input 
        mode="password"  
        placeholder='请输入密码' 
        prefix={<IconUnlock />}
        name = "password"
        onChange={handleChange}
        ></Input>
      <br/><br/><br/><br/>
      <Button theme='solid' type='primary' style={{ marginRight: 8 }} block onClick={handleSubmit}>登录</Button>
      <br/><br/>
      <Button theme='light' type='primary' style={{ marginRight: 8 }} block onClick={ ()=> history('/register')}>注册</Button>  
    </div>
  )
}
export default Login