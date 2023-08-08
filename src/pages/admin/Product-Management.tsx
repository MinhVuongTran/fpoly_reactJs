import { useGetProductsQuery, useRemoveProductMutation } from '@/api/product';
import { Button, Skeleton, Table, Popconfirm } from 'antd';
import { Link } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ProductManagement = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [removeProduct, { isLoading: isRemoveLoading }] =
    useRemoveProductMutation();
  if (isLoading) return <Skeleton />;
  if (error) return <div>Error</div>;
  const dataSource = data?.map(({ id, name, price }) => {
    return {
      key: id,
      name,
      price,
    };
  });
  const columns = [
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
      title: 'Action',
      key: 'action',
      render: ({ key: id }: any) => {
        return (
          <>
            <Link to={`/admin/product/${id}/edit`}>
              <Button type='primary' className='mr-2'>
                Edit
              </Button>
            </Link>
            <Popconfirm
              placement='topLeft'
              title={'Are you delete?'}
              onConfirm={() => confirm(id)}
              okText='Yes'
              cancelText='No'>
              <Button danger type='primary'>
                {isRemoveLoading ? (
                  <AiOutlineLoading3Quarters className='animate-spin' />
                ) : (
                  'Delete'
                )}
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
  const confirm = (id) => {
    removeProduct(id);
  };
  return (
    <div className='max-w-4xl mx-auto'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-bold text-2xl'>Quản lý Sản phẩm</h2>
        <Button type='primary'>
          <Link to='/admin/product/add'>Thêm sản phẩm</Link>
        </Button>
      </div>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ProductManagement;
