import { Table as TableAntd } from 'antd';
import { ColumnsType } from 'antd/es/table';

import ICar from '@/interfaces/car';
import { useSelector } from 'react-redux';
type Props = {
  columns: ColumnsType<ICar>;
};

const Table = ({ columns }: Props) => {
  const { items } = useSelector((state: any) => state.carts);
  return <TableAntd caption='Cart' columns={columns} dataSource={items} />;
};

export default Table;
