import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { useGetProductsQuery } from '@/api/product';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAppDispatch } from '@/app/hooks';
import { add } from '@/slices/Cart';
import CartModal from '@/components/Cart';
type Props = {};

const HomePage = (props: Props) => {
  const { data, isLoading, error } = useGetProductsQuery();

  const dispatch = useAppDispatch();

  return (
    <>
      <CartModal />
      <Row gutter={16}>
        {data?.map((i) => (
          <Col span={6} key={i.id}>
            <Card
              title={i.name}
              actions={[
                <Button
                  icon={<AiOutlineShoppingCart key='addToCart' />}
                  type='primary'
                  onClick={() => dispatch(add(i))}>
                  Add to cart
                </Button>,
              ]}>
              Gia: {i.price}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
