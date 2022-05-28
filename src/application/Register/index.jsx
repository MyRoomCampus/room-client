import React, { Component,useState,useEffect } from 'react'
import { Input,Button } from '@douyinfe/semi-ui';
import { IconUnlock,IconUser,IconSafe } from '@douyinfe/semi-icons';
import Welcome from '../Welcome';
import { asyncRegister } from '../../store/slice/registerSlice';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import "./style.css"

// export default class Register extends Component {
  
//   state = {
//     username:'',
//     password:'',
//     passwordConfirm:''
//   }
//   handleSubmit = e => {
//     e.preventDefault();
//     const user = {...this.state}
//     console.log(this.state)
    
//     this.props.dispatch(asyncRegister(user));
//     console.log('hhhh');
//   }
//   handleChange = (value,e)=>{
//     // console.log(e.target.name);
//     this.setState({
//       [e.target.name]:value
//     })
//   }
//   render() {
//     const {username,password,passwordConfirm} = this.state
//     return (
//       <form onSubmit={this.handleSubmit}>
//           <div className="login_content">
//           <Welcome/>
//           <br/><br/>
//           <Input 
//             placeholder='请输入用户名' 
//             prefix={<IconUser />}
//             name="username"
//             defaultValue={username}
//             onChange={this.handleChange}
//             ></Input>
//           <br/><br/>
//           <Input 
//             mode="password"  
//             placeholder='请输入密码' 
//             prefix={<IconUnlock />}
//             name = "password"
//             defaultValue={password}
//             onChange={this.handleChange}
//             ></Input>
//           <br/><br/>
//           <Input 
//             mode="password"  
//             placeholder='请再次确认密码' 
//             prefix={<IconSafe />}
//             name="property"
//             defaultValue={passwordConfirm}
//             onChange={this.handleChange}
//             ></Input>
//           <br/><br/>
//           <Button theme='solid' type='primary' style={{ marginRight: 8 }} block htmlType="submit">注册</Button>
//         </div>
//       </form>
//     )
//   }
// }

function Register(){
  // const [user,setUser] = useState({username:'',password:'',passwordConfirm:''})
  // useEffect(() => {
  //   console.log("@@@1user 的值", user);
  // },[user]);
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [passwordConfirm,setPasswordConfirm] = useState('')
  const { redirectTo } = useSelector((state) => {
    return {
      redirectTo: state.registerData.redirectTo,
    };
  });
  // 注册成功后返回重定向的路由（重定向到login）
  const history = useNavigate();
  if(redirectTo){
    history(redirectTo)
  }
 
  const dispatch = useDispatch();
  function handleChange(value,e){
    let key = e.target.name;
    if(key==='username'){
      setUsername(value)
    }else if(key==='password'){
      setPassword(value)
    }else{
      setPasswordConfirm(value)
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log('hhhh');
    let user = {'username':username,'password':password,'passwordConfirm':passwordConfirm}
    console.log(user);
    dispatch(asyncRegister(user));
    // console.log('@@@register_index_temp',temp);
  }
  return (
    <form onSubmit={handleSubmit}>
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
        <br/><br/>
        <Input 
          mode="password"  
          placeholder='请再次确认密码' 
          prefix={<IconSafe />}
          name="passwordConfirm"
          
          onChange={handleChange}
          ></Input>
        <br/><br/>
        <Button theme='solid' type='primary' style={{ marginRight: 8 }} block htmlType="submit">注册</Button>
      </div>
    </form>
  )
}
export default Register