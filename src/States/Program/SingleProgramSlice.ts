import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    SingleProgramData: {
        program: {
            _id: string,
            title: string,
            image: string,
            createdAt: string,
            updatedAt: string,
            __v: 0,
            id: string,
        }
        series: {
            _id: string,
            program: string,
            title: string,
            name: string,
            video: string,
            createdAt: string,
            updatedAt: string,
            __v: 0,
            totalVideoDuration: number,
            classes: {
                _id: string,
                program: string,
                series: string,
                topic: string,
                title: string,
                description: string,
                date: string,
                video: string,
                pdfFile: string,
                docFile: string,
                isRead: boolean,
                createdAt: string,
                updatedAt: string,
                id: string,
            }[]
        }[]
    } | null | undefined
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
    SingleProgramData: null,
    meta: null

};
interface Permitter {
    id: string | null | undefined,
    date: any,
    searchTerm: string | undefined,
}
export const SingleProgram = createAsyncThunk(
    'SingleProgram',
    async (value: Permitter, thunkApi) => {
        try {
            const response = await baseURL.get(`/program/${value.id}${value.date && `?date=${value.date}`}${value?.searchTerm && `${value.date?'&':'?'}searchTerm=${value?.searchTerm}`}`, {
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
export const SingleProgramSlice = createSlice({
    name: 'SingleProgram',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SingleProgram.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(SingleProgram.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.SingleProgramData = action.payload;
                state.meta = action.payload.meta;
            }),
            builder.addCase(SingleProgram.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.SingleProgramData = null
                state.meta = null
            })
    }
})
export default SingleProgramSlice.reducer