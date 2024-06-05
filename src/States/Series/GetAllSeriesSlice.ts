import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    AllSeries: {
        _id: string,
        program: {
            _id: string,
            title: string,
            image: string,
            createdAt: string,
            updatedAt: string,
            __v: number,
            id: string,
        },
        title: string,
        createdAt: string,
        updatedAt: string,
        id: string,
    }[]
    meta: {
        page: number,
        limit: number,
        total: number,
        totalPage: number,
    } | null
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    AllSeries: [],
    meta: null

};

export const GetAllSeries = createAsyncThunk(
    'GetAllSeries',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/series/all`, {
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
export const GetAllSeriesSlice = createSlice({
    name: 'GetAllSeries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllSeries.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAllSeries.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.AllSeries = action.payload.data;
                state.meta = action.payload.meta;
            }),
            builder.addCase(GetAllSeries.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.AllSeries = []
                state.meta = null
            })
    }
})
export default GetAllSeriesSlice.reducer