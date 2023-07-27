import { fetchCars } from '@/actions/car';
import ICar from '@/interfaces/car';
import { List as ListAntd } from 'antd';
import { Dispatch, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '..';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchProducts } from '@/slices/Product';

const List = () => {
  const { products } = useAppSelector((state: any) => state.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <ListAntd
        className='demo-loadmore-list'
        // loading={isLoading}
        itemLayout='horizontal'
        dataSource={products}
        renderItem={(item: ICar) => <Item key={item.id} item={item} />}
      />
    </>
  );
};

export default List;
