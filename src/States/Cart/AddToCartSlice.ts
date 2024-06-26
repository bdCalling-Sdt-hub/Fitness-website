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
interface Permitter {
    id: string | null | undefined,
    quantity: number | string | null | undefined,
}
export const AddToCart = createAsyncThunk(
    'AddToCart',
    async (value: Permitter, thunkApi) => {
        try {
            const response = await baseURL.post(`/cart/add-to-cart/${value.id}`, { quantity: value.quantity }, {
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
export const AddToCartSlice = createSlice({
    name: 'AddToCart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddToCart.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(AddToCart.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
            }),
            builder.addCase(AddToCart.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
            })
    }
})
export default AddToCartSlice.reducer