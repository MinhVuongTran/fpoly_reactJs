import { addCar } from '@/actions/car';
import { useAppDispatch } from '@/app/hooks';
import ICar from '@/interfaces/car';
import { PlusOutlined } from '@ant-design/icons';
import { Form as FormAntd } from 'antd';
import { Button, Input } from '..';
import { addProducts } from '@/slices/Product';

const Form = () => {
  const dispatch = useAppDispatch();
  const [form] = FormAntd.useForm();

  const onFinish = (car: ICar) => {
    dispatch(
      addProducts({
        id: Math.floor(Math.random() * 100) + 1,
        title: car.title,
        price: 123,
      }),
    );
    form.resetFields();
  };

  return (
    <FormAntd
      form={form}
      name='horizontal_login'
      layout='inline'
      onFinish={onFinish}>
      <FormAntd.Item
        name='title'
        rules={[{ required: true, message: 'Please input car name!' }]}>
        <Input placeholder='Car name ...' />
      </FormAntd.Item>
      <FormAntd.Item shouldUpdate>
        {() => (
          <Button
            type='primary'
            icon={<PlusOutlined />}
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }>
            Add
          </Button>
        )}
      </FormAntd.Item>
    </FormAntd>
  );
};

export default Form;
