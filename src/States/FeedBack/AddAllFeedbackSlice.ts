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
            gender: string,
            date: string,
            price: string,
            images: string[],
            description: string,
            createdAt: string,
            updatedAt: string,
            __v: number,
            id: string,
        },
        user: string,
        quantity: number,
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
interface Parameter {
    feedback: string | undefined | null
}
export const AddAllFeedback = createAsyncThunk(
    'AddAllFeedback',
    async (value: Parameter, thunkApi) => {
        try {
            const response = await baseURL.post(`/feedback/all`, { text: value?.feedback }, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.AddItem('token')}`,
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
export const AddAllFeedbackSlice = createSlice({
    name: 'AddAllFeedback',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(AddAllFeedback.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(AddAllFeedback.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.Feedback = action.payload;
            }),
            builder.addCase(AddAllFeedback.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.Feedback = []
            })
    }
})
export default AddAllFeedbackSlice.reducer