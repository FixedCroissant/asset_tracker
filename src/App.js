import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
//import { useState } from "react";
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
      [getItem("Option 1", "Item 1"), getItem("Option 2", "Item 2")],
      "group"
    ),
  ]),
  {
    type: "divider",
  },
  getItem("Navigation Two", "sub4", <SettingOutlined />, [
    getItem("Option 3", "Item 3"),
  ]),
];

const App = () => {
  const onClick = (e) => {
    console.log("click ", e);

    console.log(`The item in the key is: ` + e.key);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="logo" />
      </Header>
      <Layout>
        <Sider
          width={270}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            onClick={onClick}
            style={{
              width: 270,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
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
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
