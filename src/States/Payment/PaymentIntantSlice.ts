import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    clientSecret: string,

}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    clientSecret: ''
};
interface Permitter {
    _id: string | null | undefined,
    price: number | string | null | undefined,
}
export const PaymentIntant = createAsyncThunk(
    'PaymentIntant',
    async (value: Permitter, thunkApi) => {
        try {
            const response = await baseURL.post('/payment/payment-intent', {
                price: value.price,
                plan_id: value._id,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            return response?.data.data.client_secret;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const PaymentIntantSlice = createSlice({
    name: 'PaymentIntant',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(PaymentIntant.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(PaymentIntant.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.clientSecret = action.payload
            }),
            builder.addCase(PaymentIntant.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.clientSecret = ''
            })
    }
})
export default PaymentIntantSlice.reducer