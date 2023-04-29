import { createAsyncThunk } from '@reduxjs/toolkit';
import { networkInstance } from '../../utils/network';

export const getProductsList = createAsyncThunk('catalog', async (_, { rejectWithValue }) => {
  try {
    const response = await networkInstance.get('catalog');
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const getImagesList = createAsyncThunk(
  'api/images',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await networkInstance.get('api/images');
      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
