import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";

const initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    plan: [],
};
export const Subscription = createAsyncThunk(
    'Subscription',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/subscription-plan/all`, {
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
export const SubscriptionSlice = createSlice({
    name: 'Subscription',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(Subscription.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(Subscription.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.plan = action.payload;
            }),
            builder.addCase(Subscription.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.plan = []
            })
    }
})
export default SubscriptionSlice.reducer