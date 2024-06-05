import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";

interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    Product: {
        _id: string,
        productName: string,
        gender: string,
        date: string,
        price: string,
        images: [string],
        description: string,
        createdAt: string,
        updatedAt: string,
        id: string,
    } | null | undefined

}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    Product: null,
};
interface Permitter {
    id: string
}
export const SingleProduct = createAsyncThunk(
    'SingleProduct',
    async (value: Permitter, thunkApi) => {
        try {
            const response = await baseURL.get(`/product/${value?.id}`, {
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
export const SingleProductSlice = createSlice({
    name: 'SingleProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SingleProduct.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(SingleProduct.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.Product = action.payload;
            }),
            builder.addCase(SingleProduct.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.Product = null
            })
    }
})
export default SingleProductSlice.reducer