import React, { useEffect, useState } from "react";
import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getUserLogin } from "../../utils/getuserlogin";
import { PATH } from "../../constant/config";
import { User } from "../User/User";
import { Film } from "../Film/Film";
import SubMenu from "antd/es/menu/SubMenu";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const Admin = () => {
  const navigate = useNavigate();
  const userInfo = getUserLogin();
console.log(userInfo.payload.maLoaiNguoiDung)
  useEffect(() => {
    if (!userInfo) {
      alert("Bạn phải đăng nhập trước khi truy cập vào trang này");
      navigate(PATH.dangnhap);
    } else if (userInfo.payload.maLoaiNguoiDung === 'KhachHang') {
      alert("Bạn không có quyền truy cập vào trang này")
      navigate(PATH.home);
    }
  }, [userInfo, navigate]);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <NavLink to={PATH.home}>
          <img
            width={130}
            height={130}
            src="https://cinestar.com.vn/_next/image/?url=%2Fassets%2Fimages%2Fheader-logo.png&w=1920&q=75"
            alt=""
            style={{
              marginTop: "20px",
              marginLeft: "10px",
              marginBottom: "10px",
            }}
          />
        </NavLink>

        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {/* <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to={PATH.user}>User</NavLink>
          </Menu.Item> */}
          <SubMenu key="5" icon={<TeamOutlined />} title="Films">
            <Menu.Item key="2" icon={<TeamOutlined />}>
              <NavLink to={PATH.film}>Film</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<TeamOutlined />}>
              <NavLink to={PATH.addfilm}>Thêm Film</NavLink>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <div></div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

