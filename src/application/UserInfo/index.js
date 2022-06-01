import React, { useEffect, useState } from "react";
import { Avatar } from "@douyinfe/semi-ui";
import { Input, Button, Notification, Popconfirm } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import "./style.css";

function UserInfo(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function logout() {
    cookie.remove("userData");
    setUsername("");
    setPassword("");
    Notification.warning({
      title: "请前往登陆",
      duration: 3,
      theme: "light",
      position: "top",
    });
    navigate("/login");
  }

  const navigate = useNavigate();
  useEffect(() => {
    console.log("userinfo", cookie.load("userData"));
    let userData = cookie.load("userData");

    if (!userData) {
      Notification.warning({
        title: "请前往登陆",
        duration: 3,
        theme: "light",
        position: "top",
      });
      navigate("/login");
    } else {
      setUsername(userData.username);
      setPassword(userData.password);
      console.log("@@mounted_username", username);
      console.log("@@mounted_password", password);
    }
  }, []);

  return (
    <>
      <div className="userInfo">
        <div className="avatar">
          <Avatar size="large" style={{ margin: 4 }} color="blue">
            {username.substring(0, 1).toUpperCase()}
          </Avatar>
        </div>

        <br />
        <br />
        <label style={{ display: "block" }}>用户名:</label>
        <br />
        <Input value={username} size="large" disabled></Input>
        <br />
        <br />
        <label style={{ display: "block" }}>密码:</label>
        <br />
        <Input mode="password" value={password} size="large" disabled></Input>
        <br />
        <br />
        <div className="avatar">
          <br />
          <Button
            theme="solid"
            type="danger"
            style={{ marginRight: 8, marginTop: "20px" }}
            block
          >
            修改密码
          </Button>
        </div>
        <div className="avatar">
          <br />
          <Popconfirm
            title="确定是否要退出登录？"
            content="退出登录后将跳转到登录页"
            onConfirm={logout}
          >
            <Button
              theme="solid"
              type="tertiary"
              style={{ marginRight: 8, marginTop: "20px" }}
              block
            >
              退出
            </Button>
          </Popconfirm>
        </div>
      </div>
    </>
  );
}

export default React.memo(UserInfo);
