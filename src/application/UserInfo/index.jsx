import React,{useEffect,useState} from "react";
import { Avatar } from '@douyinfe/semi-ui';
import { Input,Button } from '@douyinfe/semi-ui';
// import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import cookie from "react-cookies";
import './style.css'

function UserInfo(props) {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
    console.log("iii");
    function logout(){
      if(window.confirm('确定退出登录吗？')){
        cookie.remove('userData')
        setUsername('')
        setPassword('')
        // dispatch(lo)
        alert('请前往登录！')
        history('/login')
      }
    }

    const history = useNavigate();
    useEffect(() => {
      console.log('userinfo',cookie.load('userData'));
      let userData = cookie.load('userData');
      
      if(!userData){
        alert('请前往登录！')
        history('/login')
      }else{
        setUsername(userData.username)
        setPassword(userData.password)
        console.log('@@mounted_username',username);
        console.log('@@mounted_password',password);
      }
    },[])

  return (
    <>
      
      <div className="userInfo">
        <div className="avatar">
          <Avatar size="large" style={{ margin: 4 }} color="blue">U</Avatar>
        </div>
        
        <br/><br/>
        <label style={{display:'block'}}>用户名:</label> 
        <br/>
        <Input value={username} size="large" disabled></Input>
        <br/><br/>
        <label style={{display:'block'}}>密码:</label> 
        <br/>
        <Input mode="password"  value={password} size="large" disabled ></Input>
        <br/><br/>
        <div className="avatar">
          {/* <Button theme='solid' type='primary' style={{ marginRight: 8 ,marginTop:'20px'}} block>保存</Button>  */}
          <br/>
          <Button theme='solid' type='tertiary' style={{ marginRight: 8 ,marginTop:'20px'}} block onClick={logout}>退出</Button> 

        </div>
      </div>
    </>
  );
}

export default React.memo(UserInfo);
