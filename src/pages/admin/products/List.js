import React from 'react'
import { Card, Table , Button , Popconfirm } from "antd"
import index from '../dashboard'

function List(props) {

    const dataSource = [{
        id: 1,
        name: "泡面",
        price: 5
    },{
        id: 2,
        name: "香皂",
        price: 7.8
    },{
        id: 3,
        name: "火腿肠",
        price: 10
    }]

    const colums = [{
        title: "序号",
        key: "index",
        width: 80,
        align: "center",
        render: (txt,record,index)=>index+1
    },{
        title: "名字",
        dataIndex: 'name'
    },{
        title: "价格",
        dataIndex: 'price'
    },{
        title: "操作",
        width: 300,
        render: (txt,record,index)=>{
            return (
                <div>
                    <Button type="primary" size="small">修改</Button>
                    <Popconfirm title="确定删除？" 
                        onCancel={()=>console.log("取消删除")} onConfirm={()=>console.log("确认删除")}>
                    <Button style={{margin:"0 1rem"}} type="danger" size="small">删除</Button>
                    </Popconfirm>
                </div>
            )
        }
    }]

    return (
        <Card title="商品列表" extra={
        <Button type="primary" size="small" onClick={()=>props.history.push("/admin/products/edit")}>新增</Button>
        }>
            <Table columns={colums} bordered dataSource={dataSource}></Table>
        </Card>
    )
}

export default List
