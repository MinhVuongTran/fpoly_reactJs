import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  isLoading: false,
  error: '',
} as {
  products: any[];
  isLoading: boolean;
  error: string;
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const { data } = await axios.get('http://localhost:3000/cars');
    return data;
  },
);

export const addProducts = createAsyncThunk(
  'product/addProducts',
  async (product) => {
    const { data } = await axios.post('http://localhost:3000/cars', product);
    return data;
  },
);

export const deleteProducts = createAsyncThunk(
  'product/deleteProducts',
  async (id) => {
    await axios.delete(`http://localhost:3000/cars/${id}`);
    return id;
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.products = action.payload), (state.isLoading = false);
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(addProducts.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(deleteProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.products.filter((product) => product.id !== action.payload);
    });
  },
});

export const productReducer = productSlice.reducer;
