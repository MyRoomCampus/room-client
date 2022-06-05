import React, { useEffect } from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/index";
import { useLocation } from "react-router-dom";
// import cookie from "react-cookies";
// import { Notification } from "@douyinfe/semi-ui";
import "./style.css";
import { refreshAccessToken } from "../../api/request";
function Home(props) {
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    if (mql.matches) {
      document.body.classList.add("all");
      document.body.setAttribute("theme-mode", "dark");
    } else {
      document.body.classList.remove("all");
      if (document.body.hasAttribute("theme-mode")) {
        document.body.removeAttribute("theme-mode");
      }
    }
  }, []);
  if (localStorage.getItem("REFRESH_TIME") !== null) {
    let diff = new Date().getTime() - localStorage.getItem("REFRESH_TIME");
    if (diff > 1) {
      refreshAccessToken().then((response) => {
        localStorage.setItem("ROOM_JWT_TOKEN_KEY", response.data.accessToken);
        localStorage.setItem("REFRESH_TIME", new Date().getTime());
      });
    }
  }

  // const navigate = useNavigate();
  // useEffect(() => {
  //   let userData = cookie.load("userData");

  //   if (!userData) {
  //     Notification.warning({
  //       title: "请前往登陆",
  //       duration: 3,
  //       theme: "light",
  //       position: "top",
  //     });
  //     navigate("/login");
  //   }
  // }, []);
  let path = useLocation().pathname.split("/")[1];
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
      </NavLink> */}
      <Outlet />
      {path === "houseDetails" || path === "activity" ? null : <NavBar />}
    </div>
  );
}

export default React.memo(Home);
