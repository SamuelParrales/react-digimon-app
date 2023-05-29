import { digimonApi } from "../../api/digimonApi"
import { hideLoader, showLoader } from "../loader"
import { loadedData, loadingData, setActiveDigimon, setData } from "./digimonSlice"

export const startLoadingDigimons = ({query,page=0}={query:'',page:0})=>{
    return async (dispatch)=>{
        dispatch(showLoader());
        dispatch(loadingData());
        const {data} = await digimonApi.get(`?name=${query}&page=${page}&pageSize=8`)
      
        const digimons = data.content || []; 
        
        dispatch(setData({digimons,pageable:data.pageable}));
        dispatch(loadedData());
        dispatch(hideLoader());

    }   
}

export const startLoadingDigimon = (id)=>{
    return async (dispatch)=>{
        dispatch(showLoader());
        dispatch(loadingData());
        const {data} = await digimonApi.get(`/${id}`);

        dispatch(setActiveDigimon(data))
        dispatch(loadedData());
        dispatch(hideLoader());
    
    } 
}