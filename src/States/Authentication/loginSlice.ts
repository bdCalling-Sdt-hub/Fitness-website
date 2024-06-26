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
    email: string;
    password: string;
}
export const login = createAsyncThunk(
    'login',
    async (value: IValue, thunkApi) => {
        try {
            const response = await baseURL.post(`/auth/login`, { ...value });
            localStorage.setItem('token', response?.data.data.accessToken)
            return response?.data.data.accessToken;
        } catch (error) {
            const axiosError = error as AxiosError;
            const message = axiosError?.response?.data;
            return thunkApi.rejectWithValue(message);
        }

    }
)
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(login.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload;
            }),
            builder.addCase(login.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.user = {}
            })
    }
})
export default loginSlice.reducer