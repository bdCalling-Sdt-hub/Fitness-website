import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    Feedback: {
        _id: string,
        productId: {
            _id: string,
            productName: string,
            gender:string,
            date: string,
            price: string,
            images: string[],
            description: string,
            createdAt: string,
            updatedAt: string,
            __v:number,
            id: string,
        },
        user: string,
        quantity:number,
        createdAt: string,
        updatedAt: string,
        __v: number,
        id: string,
    }[]
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    Feedback: []
};

export const GetAllFeedback = createAsyncThunk(
    'GetAllFeedback',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/feedback/all`, {
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
export const GetAllFeedbackSlice = createSlice({
    name: 'GetAllFeedback',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllFeedback.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAllFeedback.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.Feedback = action.payload;
            }),
            builder.addCase(GetAllFeedback.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.Feedback = []
            })
    }
})
export default GetAllFeedbackSlice.reducer