import ICar from '@/interfaces/car';
import { produce } from 'immer';

const initialState = {
  items: [],
};

const CartReducer = (state: any = initialState, action: any) => {
  return produce(state, (draftState: any) => {
    switch (action.type) {
      case 'cart/add':
        const existItem = state.items.findIndex(
          (item: any) => item.id === action.payload.id,
        );

        if (existItem !== -1) {
          draftState.items[existItem].quantity++;
        } else {
          const newItem = {
            ...action.payload,
            quantity: 1,
          };
          draftState.items.push(newItem);
        }

        return;
      case 'cart/increase':
        draftState.items.find((item: ICar) => item.id === action.payload.id)
          .quantity++;

        return;
      case 'cart/decrease':
        const cartItem = draftState.items.find(
          (item: ICar) => item.id === action.payload.id,
        );

        cartItem.quantity--;
        if (cartItem.quantity < 1) {
          const confirm = window.confirm('Bạn có muốn xóa sản phẩm này?');
          if (confirm) {
            draftState.items = draftState.items.filter(
              (item: ICar) => item.id !== action.payload.id,
            );
          } else {
            cartItem.quantity = 1;
          }
        }

        return;

      default:
        return state;
    }
  });
};

export default CartReducer;
