import { deleteCar, updateCar } from '@/actions/car';
import ICar from '@/interfaces/car';
import {
  DeleteOutlined,
  EditOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { List } from 'antd';
import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '..';
import { useAppDispatch } from '@/app/hooks';
import { deleteProducts } from '@/slices/Product';

type ItemProps = {
  item: ICar;
};

const Item = ({ item }: ItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <List.Item
        key={item.id}
        actions={[
          <Button
            icon={<ShoppingCartOutlined />}
            onClick={() => dispatch({ type: 'cart/add', payload: item })}>
            Add to cart
          </Button>,
          <Button
            icon={<EditOutlined />}
            onClick={() => dispatch(updateCar({ ...item, title: '123' }))}>
            Edit
          </Button>,
          <Button
            danger={true}
            icon={<DeleteOutlined />}
            onClick={() => dispatch(deleteProducts(item.id!))}>
            Delete
          </Button>,
        ]}>
        <List.Item.Meta title={item.title} />
      </List.Item>
    </>
  );
};

export default Item;
