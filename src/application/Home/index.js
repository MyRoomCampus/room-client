import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/NavBar/index";
import { useLocation } from "react-router-dom";
// import cookie from "react-cookies";
// import { Notification } from "@douyinfe/semi-ui";
import "./style.css";
function Home(props) {
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
  console.log(useLocation().pathname.split("/")[1]);
  let path = useLocation().pathname.split("/")[1];
  return (
    <div className="home_container all">
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
      {path === "houseDetails" || path === "activity" ? null : (
        <NavBar />
      )}
    </div>
  );
}

export default React.memo(Home);
