import React from 'react'
import { Form , Card, Input } from 'antd'

function Edit(props) {

    const { getFieldDecorator } = props.form;

    return (
        <Card title="商品编辑">
            <Form>
                <Form.Item label="商品名字">
                    {getFieldDecorator('username', {
                        rules: [
                        {
                            required: true,
                            message: '请输入商品的名字',
                        }
                        ]
                    })(<Input placeholder="请输入商品的名字" />)}
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Edit
