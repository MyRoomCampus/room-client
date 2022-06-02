import React, { useEffect, useState } from "react";
import { Avatar } from "@douyinfe/semi-ui";
import { Input, Button, Notification, Popconfirm } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";
import { changePasswordReq } from "../../api/request";
import cookie from "react-cookies";
import "./style.css";

function UserInfo(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [ccpassword, setCcpassword] = useState("");
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
  }, [navigate, password, username]);
  const handleChange = (value, e) => {
    setCpassword(value);
  };
  const handleChangeRepeat = (value, e) => {
    setCcpassword(value);
  };
  const changePassword = () => {
    if (ccpassword !== cpassword) {
      Notification.error({
        title: "两次密码不一致",
        duration: 2,
        position: "top",
      });
    } else if (cpassword.length < 6) {
      Notification.error({
        title: "请保证密码长度大于等于6位",
        duration: 2,
        position: "top",
      });
    } else {
      changePasswordReq({ password: ccpassword }).then((response) => {
        console.log(response);
        Notification.success({
          title: "修改密码成功，请重新登陆",
          duration: 2,
          position: "top",
        });
        cookie.remove("userData");
        setUsername("");
        setPassword("");
        navigate("/login");
      });
    }
  };

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
        <label style={{ display: "block", color: "green", fontWeight: 1000 }}>
          用户名:
        </label>
        <br />
        <Input value={username} size="large" disabled></Input>
        <br />
        <br />
        {/* <label style={{ display: "block" }}>密码:</label>
        <br />
        <Input mode="password" value={password} size="large" disabled></Input>
        <br />
        <br /> */}
        <label style={{ display: "block", color: "red", fontWeight: 1000 }}>
          新密码:
        </label>
        <br />
        <Input
          mode="password"
          value={cpassword}
          size="large"
          onChange={handleChange}
        ></Input>
        <br />
        <br />
        <label style={{ display: "block", color: "red", fontWeight: 1000 }}>
          确认新密码:
        </label>
        <br />
        <Input
          mode="password"
          value={ccpassword}
          size="large"
          onChange={handleChangeRepeat}
        ></Input>
        <br />
        <br />
        <div className="avatar">
          <br />
          <Button
            theme="solid"
            type="danger"
            style={{ marginRight: 8, marginTop: "20px" }}
            block
            onClick={changePassword}
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
