import { AxiosError } from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from '../../AxiosConfig/Config';
const initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    user: {},
};
interface IValue {
    password: string | null,
    confirmPassword: string | null,
    email: string | null,
}
export const SetNewPass = createAsyncThunk(
    'SetNewPass',
    async (value: IValue, thunkApi) => {
        try {
            const response = await baseURL.post(`/auth/reset-password`, { email: value.email, newPassword: value.password, confirmPassword: value.confirmPassword });
            return response?.data.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }
    }
)
export const SetNewPassSlice = createSlice({
    name: 'SetNewPass',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SetNewPass.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(SetNewPass.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload;
            }),
            builder.addCase(SetNewPass.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.user = {}
            })
    }
})
export default SetNewPassSlice.reducer