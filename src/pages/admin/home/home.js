import React, { Component } from 'react'
import SideBarNav from '../../../components/admin/slder/slder'
import AdminHeader from '../../../components/admin/header/header'

import './home.less'
import { Layout } from 'antd';

const { Sider, Content,Footer } = Layout;

class Home extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className='admin-container'>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsed={this.state.collapsed}
                    >
                        <SideBarNav />
                    </Sider>
                    <Layout>
                        <AdminHeader collapsed={this.state.collapsed} onToggle={this.toggle}/>
                        <Content style={{ margin: '24px 16px 0',background:'#fff' }}>
                            {this.props.children}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by nathantai@outlook.com</Footer>
                    </Layout>
                </Layout>
            </div>

        );
    }
}

export default Home
