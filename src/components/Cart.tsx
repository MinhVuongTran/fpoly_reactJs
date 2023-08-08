import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { decrease, hide, increase } from '@/slices/Cart';
import { Button, Modal, Space } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useMemo } from 'react';

interface DataType {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartModal = () => {
  const { items, toggleShow } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const totalPrice = useMemo(() => {
    return items.reduce((acc, item) => {
      const itemTotal = item.price * item.quantity;
      return acc + itemTotal;
    }, 0);
  }, [items]);
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            icon={<AiOutlineMinus />}
            type='primary'
            onClick={() => dispatch(decrease(record.id))}></Button>
          <Button
            icon={<AiOutlinePlus />}
            type='primary'
            onClick={() => dispatch(increase(record.id))}></Button>
        </Space>
      ),
    },
  ];

  return (
    <Modal
      title='Giỏ hàng'
      centered
      open={toggleShow}
      onOk={() => dispatch(hide())}
      onCancel={() => dispatch(hide())}>
      <Table
        columns={columns}
        dataSource={items}
        footer={() => {
          return `Tổng: ${totalPrice}`;
        }}
      />
    </Modal>
  );
};

export default CartModal;
