import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';
import './App.css';
import { Form, List } from './components';
import Table from './components/Table';
import ICar from './interfaces/car';
import { useDispatch } from 'react-redux';
import Counter from './components/Counter/Counter';

function App() {
  const dispatch = useDispatch();

  const columns: ColumnsType<ICar> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    { title: 'Price', dataIndex: 'price' },
    { title: 'Quantity', dataIndex: 'quantity' },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: (text, record: ICar) => {
        return (
          <Space size='middle'>
            <Button
              icon={<MinusOutlined />}
              onClick={() =>
                dispatch({ type: 'cart/decrease', payload: record })
              }></Button>
            <Button
              icon={<PlusOutlined />}
              onClick={() =>
                dispatch({ type: 'cart/increase', payload: record })
              }></Button>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      <Form />
      <List />
      {/* <Table columns={columns} /> */}

      {/* <Counter /> */}
    </>
  );
}

export default App;
