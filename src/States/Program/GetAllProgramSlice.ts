import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    AllProgram: {
        _id: string,
        title: string,
        image: string,
        createdAt: string,
        updatedAt: string,
        __v: number,
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
    AllProgram: [],
    meta: null

};

export const GetAllProgram = createAsyncThunk(
    'GetAllProgram',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/program/all`, {
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
export const GetAllProgramSlice = createSlice({
    name: 'GetAllProgram',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllProgram.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAllProgram.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.AllProgram = action.payload.data;
                state.meta = action.payload.meta;
            }),
            builder.addCase(GetAllProgram.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.AllProgram = []
                state.meta = null
            })
    }
})
export default GetAllProgramSlice.reducer