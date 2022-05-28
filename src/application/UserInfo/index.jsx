import React,{useEffect,useState} from "react";
import { Avatar } from '@douyinfe/semi-ui';
import { Input,Button } from '@douyinfe/semi-ui';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import cookie from "react-cookies";
import { logOut } from "../../store/slice/loginSlice";
import './style.css'

function UserInfo(props) {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch();
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
    // const { userData } = useSelector((state) => {
    //   return {
    //     userData: state.loginData.userData,
    //   };
    // });
    // let userData;
    // console.log(userData)
      // 注册成功后返回重定向的路由（重定向到主页/home）
    // setUsername('e')
    // setPassword('hhh')
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
    // useEffect(() => {
    //   // console.log("@@@userData 的值", userData);
    //   // // 获取用户cookie

    //   if(username==='' && password===''){
    //     alert('请前往登录！')
    //     history('/login')
    //   }
    // },[username,password]);

    // useEffect(() => {
    //   return () => {
    //       //执行的为componentWillUnmount
    //       console.log('执行的为componentWillUnmount');
    //       userData = undefined;
    //   }
    // },[])


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
