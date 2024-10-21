import { digimonApi } from "../../api/digimonApi"
import { hideLoader, showLoader } from "../loader"
import { loadedData, loadingData, setActiveDigimon, setData } from "./digimonSlice"

export const startLoadingDigimons = ({query,page=0}={query:'',page:0})=>{
    return async (dispatch)=>{
        dispatch(showLoader());
        dispatch(loadingData());
        try{
            
            const {data} = await digimonApi.get(`digimon?name=${query}&page=${page}&pageSize=8`)
            const digimons = data.content || []; 
            dispatch(setData({digimons,pageable:data.pageable}));
        }
        catch(e){
            console.error(e)
        }
        finally{
            dispatch(loadedData());
            dispatch(hideLoader());
        }
      
       
        

    }   
}

export const startLoadingDigimon = (id)=>{
    return async (dispatch)=>{
        dispatch(showLoader());
        dispatch(loadingData());
        const {data} = await digimonApi.get(`digimon/${id}`);

        dispatch(setActiveDigimon(data))
        dispatch(loadedData());
        dispatch(hideLoader());
    
    } 
}