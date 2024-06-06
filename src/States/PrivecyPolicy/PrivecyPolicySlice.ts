import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    PrivecyPolicyData: {
        _id: string,
        description: string,
        createdAt: string,
        updatedAt: string,
        __v: 0,
        id: string,
    }[]
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    PrivecyPolicyData: [],
};

export const PrivecyPolicy = createAsyncThunk(
    'PrivecyPolicy',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/manage/get-privacy-policy`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            console.log(response.data)
            return response?.data.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const PrivecyPolicySlice = createSlice({
    name: 'PrivecyPolicy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(PrivecyPolicy.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(PrivecyPolicy.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.PrivecyPolicyData = action.payload;
            }),
            builder.addCase(PrivecyPolicy.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.PrivecyPolicyData = []
            })
    }
})
export default PrivecyPolicySlice.reducer