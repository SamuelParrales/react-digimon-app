import { createSlice } from '@reduxjs/toolkit';
export const digimonSlice = createSlice({
    name: 'digimon',
    initialState: {
        digimons:[],
        pageable:{},
        isLoading:false,
        activeDigimon:null,
    },
    reducers: {
        loadingData:(state)=>{
            state.isLoading = true;
        },
        setData: (state,{payload})=>{
            state.digimons = payload.digimons;
            state.pageable = payload.pageable
        },
        setActiveDigimon: (state,{payload})=>{
            state.activeDigimon = payload;
        },
        loadedData: (state)=>{
            state.isLoading = false;
        },
        clearActiveDigimon: (state)=>{
            state.activeDigimon = null;
        },
        clearData:(state)=>{
            state.digimons = [];
            state.pageable = {}
        }
    }
});

export const {setData,loadingData,loadedData,setActiveDigimon,clearData,clearActiveDigimon} = digimonSlice.actions;