import React, { useState } from "react";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";

import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

//Menu items.
const items = [
  getItem("Navigation One", "sub1", <UserOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Home", "/"), getItem("About", "/about")],
      "group"
    ),
  ]),
  {
    type: "divider",
  },
  getItem("Navigation Two", "sub4", <SettingOutlined />, [
    getItem("Users", "/users"),
  ]),
];

const MainLayout = () => {
  //start

  const navigation = [{ label: "Item1", key: "/home" }];

  const navigate = useNavigate();

  const onClick = ({ key }) => {
    console.log(`Hello World!`);

    console.log(`Information about the key below:`);
    console.log(key);
    //Go to our link.
    navigate(key);
  };
  //end

  return (
    <Layout>
      <Header style={{ padding: 0, backgroundColor: "#5e5c5c" }}></Header>
      <Layout>
        <Sider
          width={270}
          style={{
            background: "#5e5c5c",
          }}
        >
          <Menu
            onClick={onClick}
            style={{
              width: 270,
            }}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            height: "100vh",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          ></Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              height: 100,
              backgroundColor: "#fffff",
            }}
          >
            Content
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
