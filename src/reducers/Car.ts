import ICar from '@/interfaces/car';
import { produce } from 'immer';

type Action = {
  type: string;
  payload: any;
};

const initialState: any = {
  cars: [] as ICar[],
};

const CarReducer = (state = initialState, action: Action) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case 'GET':
        draftState.cars = action.payload;
        return;
      case 'ADD':
        draftState.cars.push(action.payload);
        return;
      case 'UPDATE':
        draftState.cars = state.cars.map((car: ICar) =>
          car.id === action.payload.id ? action.payload : car,
        );
        return;
      case 'DELETE':
        draftState.cars = state.cars.filter(
          (item: ICar) => item.id !== action.payload,
        );
        return;
      default:
        return draftState;
    }
  });
};

export default CarReducer;
