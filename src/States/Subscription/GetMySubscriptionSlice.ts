import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface InitialState { 
    error: boolean,
    success: boolean,
    loading: boolean,
    isSuccess: boolean,
    myPlan :{
        _id: string,
        user_id: string,
        plan_id: string,
        amount:number,
        startDate: string,
        endDate: string,
        payment_status: string,
        plan_type: string,
        status: string,
        createdAt: string,
        updatedAt: string,
        __v: 0
    } | undefined | null
}
const initialState:InitialState = {
    error: false,
    success: false,
    loading: true,
    isSuccess: false,
    myPlan: null,
};
export const GetMySubscription = createAsyncThunk(
    'GetMySubscription',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/subscriptions/my-plan`, {
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
export const GetMySubscriptionSlice = createSlice({
    name: 'GetMySubscription',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetMySubscription.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetMySubscription.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.myPlan = action.payload;
            }),
            builder.addCase(GetMySubscription.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.myPlan = null
            })
    }
})
export default GetMySubscriptionSlice.reducer