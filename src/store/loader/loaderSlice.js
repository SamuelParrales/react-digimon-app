import { createSlice } from '@reduxjs/toolkit';
export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        show: false,
    },
    reducers: {
        showLoader: (state) => {
            state.show = true;

        },
        hideLoader: (state)=>{
            state.show = false;
        }
    }
});

export const {showLoader,hideLoader} = loaderSlice.actions; 