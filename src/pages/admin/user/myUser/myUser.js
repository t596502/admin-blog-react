import React, {Component} from 'react'
import {Table,Card} from "antd";
import * as api from "request/requestApi";


let currentPage = 1
const pageSize = 10
class myUser extends Component {
    state = {
        userList:[]
    };
    UNSAFE_componentWillMount() {
        this.getArticleList()
    }


    getArticleList = ()=>{
        api.userList({page:currentPage,pageSize}).then(res=>{
            const {data,code} = res;
            if(code === 0){
                this.setState({
                    userList:data.rows,
                    total:data.count
                })
            }
        })
    };

    getColumns = ()=> [
        {
            title: '用户名',
            dataIndex: 'username',
            key:'username'
        },
        {
            title:'邮箱',
            dataIndex: 'email',
            key:'email'
        },
        {
            title: '创建时间',
            dataIndex: 'created_at',
            key:'created_at',
        }
    ];
    pageChange =(page)=>{
        currentPage = page;
        this.getArticleList({})

    }
    render() {
        const {userList,total} = this.state
        return (
            <div className='manage'>
                <div style={{paddingTop:'10px'}}>
                    <Card title="我的用户" bordered={false}>
                        <Table
                            rowKey='username'
                            columns={this.getColumns()}
                            dataSource={userList}
                            bordered
                            pagination={{total:total,current:currentPage,pageSize:pageSize,onChange:(page)=>this.pageChange(page)}}
                        />
                    </Card>


                </div>


            </div>
        )
    }
}

export default myUser
