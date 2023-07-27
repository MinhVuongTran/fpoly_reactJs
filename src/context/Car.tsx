import axios from 'axios';
import { createContext, useReducer } from 'react';
import { produce } from 'immer';
import ICar from '@/interfaces/car';
import CarReducer from '@/reducers/Car';

const CarContext = createContext({
  cars: [] as ICar[],
  fetchCars: () => void {},
  addCar: (car: any) => void {},
  deleteCar: (id: any) => void {},
} as any);

const initialState = {
  cars: [],
};

type CarProps = {
  children: React.ReactNode;
};

const CarProvider = ({ children }: CarProps) => {
  const [carState, dispatch] = useReducer(produce(CarReducer), initialState);

  const fetchCars = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/cars');
      dispatch({ type: 'GET', payload: data });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  const addCar = async (car: ICar) => {
    const { data } = await axios.post('http://localhost:3000/cars', car);
    dispatch({ type: 'ADD', payload: data });
  };
  const updateCar = async (car: ICar) => {
    const { data } = await axios.put(
      'http://localhost:3000/cars/' + car.id,
      car,
    );
    dispatch({ type: 'UPDATE', payload: data });
  };

  const deleteCar = async (id: any) => {
    await axios.delete(`http://localhost:3000/cars/${id}`);
    dispatch({ type: 'DELETE', payload: id });
  };

  const stateShare = {
    cars: carState.cars,
    fetchCars,
    addCar,
    updateCar,
    deleteCar,
  };

  return (
    <CarContext.Provider value={stateShare}>{children}</CarContext.Provider>
  );
};

export { CarProvider };
export default CarContext;
