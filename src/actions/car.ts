import ICar from '@/interfaces/car';
import axios from 'axios';

export const fetchCars = () => async (dispatch: any) => {
  try {
    const { data } = await axios.get('http://localhost:3000/cars');
    dispatch({ type: 'GET', payload: data });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addCar = (car: ICar) => async (dispatch: any) => {
  const { data } = await axios.post('http://localhost:3000/cars', car);
  dispatch({ type: 'ADD', payload: data });
};

export const updateCar = (car: ICar) => async (dispatch: any) => {
  const { data } = await axios.put('http://localhost:3000/cars/' + car.id, car);
  dispatch({ type: 'UPDATE', payload: data });
};

export const deleteCar = (id: any) => async (dispatch: any) => {
  await axios.delete(`http://localhost:3000/cars/${id}`);
  dispatch({ type: 'DELETE', payload: id });
};
