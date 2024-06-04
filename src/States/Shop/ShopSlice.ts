import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";

const initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    Products: [],
};
export const ShopItems = createAsyncThunk(
    'ShopItems',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/product/products`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data.data.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const ShopItemsSlice = createSlice({
    name: 'ShopItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ShopItems.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(ShopItems.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.Products = action.payload;
            }),
            builder.addCase(ShopItems.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.Products = []
            })
    }
})
export default ShopItemsSlice.reducer