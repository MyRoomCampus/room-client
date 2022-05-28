import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar";
import './style.css'
function Home(props) {
  return (
    <div className="home_container">
    
      {/* <NavLink style={{ marginRight: "10px", color: "red" }} to="/houselist">
        房屋信息Tab
      </NavLink>
      <NavLink style={{ marginRight: "10px", color: "blue" }} to="/userinfo">
        我的信息Tab
      </NavLink>
      <NavLink style={{ color: "green" }} to="/demo">
        异步接口测试页面Tab
      </NavLink>
      <NavLink style={{ color: "green" }} to="/register">
        注册
      </NavLink>
      <NavLink style={{ color: "pink" }} to="/login">
        登录
      </NavLink> */}
      <Outlet />
      <NavBar/>
    </div>
  );
}

export default React.memo(Home);
