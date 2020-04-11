import styles from './index.css';
import { Button,Table } from "antd";

const columns = [
    {
      title: '姓名',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '主题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '详情',
      dataIndex: 'body',
      key: 'body',
    },
  ];


  export default function(){
    return(
      <div>
          <Button type="primary">拉取数据</Button>
          <Table dataSource={[]} columns={columns}></Table>
      </div>
  );
}