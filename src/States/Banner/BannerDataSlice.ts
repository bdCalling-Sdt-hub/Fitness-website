import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface InitialState {
    error: boolean,
    success: boolean,
    loading: boolean,
    isSuccess: boolean,
    BannerData: {
        _id: string,
        video: string,
        title: string,
        logo:string,
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
    BannerData: null,
};
export const GetBannerData = createAsyncThunk(
    'GetBannerData',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/banner`, {
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
export const BannerDataSlice = createSlice({
    name: 'GetBannerData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetBannerData.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetBannerData.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.BannerData = action.payload;
            }),
            builder.addCase(GetBannerData.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.BannerData = null
            })
    }
})
export default BannerDataSlice.reducer