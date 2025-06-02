 /* eslint-disable @typescript-eslint/no-unused-vars */
import instance from '@/services/axiosInstance';
import { Medals } from '@/types/Medals';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
  interface MyError {
        message: string;
  }
export const fetchIssues = createAsyncThunk<// Return type of the fulfilled action
        Medals[], 
        // Argument type of the thunk
        void, 
        {
            rejectValue: MyError
        }>(
  'get/medalList',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get<Medals[]>('/medals.json');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: 'An error occurred' });
    }
  }
);

interface IssuesState {
  medals: Medals[];
  status:string;
  loading: boolean;
  error: MyError | null | string;
}

const initialState: IssuesState = {
  medals: [],
  status:'idle',
  loading: false,
  error: null,
};

export const medelSlices = createSlice({
  name: 'medalList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.loading = true;
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.loading = false;
         state.status = 'succeeded';
        const mapTotal = action.payload.length > 0 ? action.payload.map((ele=>{
            const total = ele.bronze + ele.gold + ele.silver
            return {
                ...ele,
                total
            }
        })): action.payload
        state.medals = mapTotal;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      });
  },
});