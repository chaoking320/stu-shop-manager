import React from 'react'
import logo from "./t-superman.png"
import { withRouter } from "react-router-dom"
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {adminRoutes} from "../../routes"
import Icon from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const routes = adminRoutes.filter(route=>route.isShow)

function index(props) {
    return (
<Layout>
    <Header className="header" style={{
        backgroundColor:"white"
    }}>
      <div>
          <img src={logo} alt="logo"></img>
          </div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {routes.map(route=>{
              return (
                <Menu.Item key={route.path} onClick={p=>props.history.push(p.key)}>
                  
                {route.title}
                </Menu.Item>
              )
          })}
          
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px' }}>

        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default withRouter(index)
