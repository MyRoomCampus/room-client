import React, { useState } from "react";
import { Input, Button } from "@douyinfe/semi-ui";
import { IconUnlock, IconUser } from "@douyinfe/semi-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncLogin } from "../../store/slice/loginSlice";
import Welcome from "../../components/Welcome";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // 注册成功后返回重定向的路由（重定向到主页/home）
  const navigate = useNavigate();
  const dispatch = useDispatch();


  function handleChange(value, e) {
    let key = e.target.name;
    if (key === "username") {
      setUsername(value);
    } else if (key === "password") {
      setPassword(value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    let user = { username: username, password: password };
    let p = dispatch(asyncLogin(user));
    p.then(() => {
      navigate("/");
      // Notification.success({
      //   title: "登陆成功",
      //   duration: 3,
      //   position: "top",
      // });
      console.log("dispatch_later---");
    });
  }
  return (
    <div className="login_content">
      <Welcome />
      <br />
      <br />
      <Input
        placeholder="请输入用户名"
        prefix={<IconUser />}
        name="username"
        onChange={handleChange}
      ></Input>
      <br />
      <br />
      <Input
        mode="password"
        placeholder="请输入密码"
        prefix={<IconUnlock />}
        name="password"
        onChange={handleChange}
      ></Input>
      <br />
      <br />
      <br />
      <br />
      <Button
        theme="solid"
        type="primary"
        style={{ marginRight: 8 }}
        block
        onClick={handleSubmit}
      >
        登录
      </Button>
      <br />
      <br />
      <Button
        theme="light"
        type="primary"
        style={{ marginRight: 8 }}
        block
        onClick={() => navigate("/register")}
      >
        注册
      </Button>
    </div>
  );
}
export default Login;
