import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    Order: {
        _id: string,
        user: string,
        product: {
            _id: string,
            productName: string,
            price: string,
            images: string[],
            id: string,
        },
        deliveryDate: string,
        paymentStatus: string,
        quantity: number,
        totalAmount: number,
        orderStatus: string,
        createdAt: string,
        updatedAt: string,
        location: string,
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
    Order: [],
    meta: null
};

export const GetAllOrder = createAsyncThunk(
    'GetAllOrder',
    async (value, thunkApi) => {
        try {
            const response = await baseURL.get(`/order/order-history`, {
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
export const GetAllOrderSlice = createSlice({
    name: 'GetAllOrder',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetAllOrder.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(GetAllOrder.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.Order = action.payload.data;
                state.meta = action.payload.meta
            }),
            builder.addCase(GetAllOrder.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.Order = []
                state.meta = null
            })
    }
})
export default GetAllOrderSlice.reducer