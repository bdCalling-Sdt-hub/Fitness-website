import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";

const initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
};
interface Permitter {
    planId: string,
    amount: number
    transactionId: string,
    payment_status: string,
}
export const BuyPlan = createAsyncThunk(
    'BuyPlan',
    async (value: Permitter, thunkApi) => {
        try {
            const response = await baseURL.post(`/subscriptions/upgrade-plan`, { planId: value.planId, amount: value.amount,transactionId:value.transactionId, payment_status:value.payment_status}, {
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
export const BuyPlanSlice = createSlice({
    name: 'BuyPlan',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(BuyPlan.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(BuyPlan.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
            }),
            builder.addCase(BuyPlan.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
            })
    }
})
export default BuyPlanSlice.reducer