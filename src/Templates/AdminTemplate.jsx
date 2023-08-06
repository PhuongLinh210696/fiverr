import React, { useState, useEffect } from 'react';
import { NavLink, Outlet,useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { getData } from '../Utils/localStore'
const { Header, Sider, Content } = Layout;


const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //Login
  const navigate = useNavigate();
  useEffect(() => { 
    //Call local
    const user = getData('user');
    //1 no data =>redirect UserTemplate
    //2 roles not Admin => redirect UserTemplate
    if(user){
      console.log(user.user);
      if(user.user.role != "ADMIN"){
        navigate("/");
      }
    }else{
      navigate("/");
    }
   },[])

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <NavLink to="/admin/user">User</NavLink>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <NavLink to="/admin/typeofworks">Type of Works</NavLink>,
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: <NavLink to="/admin/services">Services Management</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AdminTemplate