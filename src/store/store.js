import { configureStore } from '@reduxjs/toolkit';
import { digimonSlice } from './digimon/digimonSlice';
import { loaderSlice } from './loader';

export const store = configureStore({
    reducer: {
        digimon: digimonSlice.reducer,
        loader: loaderSlice.reducer,
    },
})
