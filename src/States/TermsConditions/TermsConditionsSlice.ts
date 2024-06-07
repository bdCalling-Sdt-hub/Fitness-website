import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    TermsConditionsData: {
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
    TermsConditionsData: [],
};

export const TermsConditions = createAsyncThunk(
    'TermsConditions',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/manage/get-terms-conditions`, {
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
export const TermsConditionsSlice = createSlice({
    name: 'TermsConditions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(TermsConditions.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(TermsConditions.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.TermsConditionsData = action.payload;
            }),
            builder.addCase(TermsConditions.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.TermsConditionsData = []
            })
    }
})
export default TermsConditionsSlice.reducer