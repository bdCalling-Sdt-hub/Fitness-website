import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseURL from "../../AxiosConfig/Config";
import { AxiosError } from "axios";
interface initialState {
    error: boolean;
    success: boolean;
    loading: boolean;
    isSuccess: boolean;
    Products: {
        _id: string,
        productName: string,
        gender: string,
        date: string,
        price: string,
        images: [string],
        description: string,
        createdAt: string,
        updatedAt: string,
        id: string,
    }[],
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    } | null
}
const initialState: initialState = {
    error: false,
    success: false,
    loading: false,
    isSuccess: false,
    Products: [],
    meta: null
};
interface Permitter {
    page: number | null | undefined,
    limit: number | null | undefined,
    sort: string | null | undefined,
    searchTerm: string | null | undefined
}
export const ShopItems = createAsyncThunk(
    'ShopItems',
    async (value: Permitter, thunkApi) => {
        try {
            const response = await baseURL.get(`/product/products?page=${value?.page}&limit=${value?.limit}${value.sort && `&sort=${value.sort}`}${value.searchTerm && `&searchTerm=${value.searchTerm}`}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${ localStorage.getItem('token') } `,
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
export const ShopItemsSlice = createSlice({
    name: 'ShopItems',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ShopItems.pending, (state) => {
            state.loading = true;
            state.isSuccess = false
        }),
            builder.addCase(ShopItems.fulfilled, (state, action) => {
                state.error = false;
                state.success = true;
                state.loading = false;
                state.isSuccess = true;
                state.Products = action.payload.data;
                state.meta = action.payload.meta;
            }),
            builder.addCase(ShopItems.rejected, (state) => {
                state.error = true;
                state.success = false;
                state.loading = false;
                state.isSuccess = false;
                state.Products = []
                state.meta = null
            })
    }
})
export default ShopItemsSlice.reducer