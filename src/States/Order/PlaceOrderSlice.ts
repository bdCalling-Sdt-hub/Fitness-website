import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
};

export const PlaceOrderSlice = createAsyncThunk(
    'PlaceOrderSlice',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/order/order-history`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const PlaceOrderSliceSlice = createSlice({
    name: 'PlaceOrderSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(PlaceOrderSlice.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(PlaceOrderSlice.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
            }),
            builder.addCase(PlaceOrderSlice.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
            })
    }
})
export default PlaceOrderSliceSlice.reducer