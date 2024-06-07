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
    location: string,
    contactNumber: string,
    deliveryDate: string,
    paymentMethod: string,
    product: string,
    paymentStatus: string,
    quantity: number,
    totalAmount: number,
}
export const PlaceOrder = createAsyncThunk(
    'PlaceOrder',
    async (value:Permitter, thunkApi) => {
        console.log('response')
        try {
            const response = await baseURL.post(`/order/place-order`,{...value} ,{
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response)
            return response?.data.data;
        } catch (error) {
            console.log(error)
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const PlaceOrderSlice = createSlice({
    name: 'PlaceOrder',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(PlaceOrder.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(PlaceOrder.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
            }),
            builder.addCase(PlaceOrder.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
            })
    }
})
export default PlaceOrderSlice.reducer