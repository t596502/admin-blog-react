import React, {Component} from 'react'
import {Icon, Menu} from "antd";
import {Link} from "react-router-dom";

const {SubMenu} = Menu


class SideBarNav extends Component {
    render() {
        return (
            <div className="logo" style={{height: '100vh'}}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="admin">
                        <Icon type="home"/>
                        <span className="nav-text">
                            <Link to='/'>首页</Link>
                        </span>
                    </Menu.Item>
                    <SubMenu key="article" title={
                        <span><Icon type="mail"/><span>文章管理</span></span>
                    }>
                        <Menu.Item key="edit">
                            <Link to='/article/edit'>新增文章</Link>
                        </Menu.Item>
                        <Menu.Item key="manage">
                            <Link to='/article/manage'>文章列表</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="user" title={
                        <span><Icon type="user"/><span>用户管理</span></span>
                    }>
                        <Menu.Item key="settingUp">
                            <Link to='/user/settingUp'>个人设置</Link>
                        </Menu.Item>
                        <Menu.Item key="userList">
                            <Link to='/user/myUser'>我的用户</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

export default SideBarNav
