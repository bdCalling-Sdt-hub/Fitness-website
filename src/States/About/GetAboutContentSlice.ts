import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    AboutUs: {
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
    AboutUs: [],
};

export const GetAboutContent = createAsyncThunk(
    'GetAboutContent',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/manage/get-about-us`, {
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
export const GetAboutContentSlice = createSlice({
    name: 'GetAboutContent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAboutContent.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAboutContent.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.AboutUs = action.payload
            }),
            builder.addCase(GetAboutContent.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.AboutUs = []
            })
    }
})
export default GetAboutContentSlice.reducer