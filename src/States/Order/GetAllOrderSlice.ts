import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    cart: {
        _id: string,
        productId: {
            _id: string,
            productName: string,
            gender:string,
            date: string,
            price: string,
            images: string[],
            description: string,
            createdAt: string,
            updatedAt: string,
            __v:number,
            id: string,
        },
        user: string,
        quantity:number,
        createdAt: string,
        updatedAt: string,
        __v: number,
        id: string,
    }[]
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    cart: []
};

export const GetAllOrder = createAsyncThunk(
    'GetAllOrder',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/cart/cart-lists`, {
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
export const GetAllOrderSlice = createSlice({
    name: 'GetAllOrder',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllOrder.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAllOrder.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.cart = action.payload;
            }),
            builder.addCase(GetAllOrder.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.cart = []
            })
    }
})
export default GetAllOrderSlice.reducer