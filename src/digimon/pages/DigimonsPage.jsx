
import { useDispatch, useSelector } from "react-redux"
import { Layout } from "../../layouts/Layout"
import { startLoadingDigimons } from "../../store/digimon/thunks";
import { useEffect } from "react";
import { DigimonList } from "../components/DigimonList";
import { clearData } from "../../store/digimon/digimonSlice";
import { DigimonsHeader } from "../components/DigimonsHeader";
import { Pagination } from "../../components/Pagination";



export const DigimonsPage = () => {
    const dispatch = useDispatch();
    const {digimons,isLoading,pageable}= useSelector((state)=>state.digimon);

    const query = (new URLSearchParams(location.search)).get('q') || ''; //get query
    useEffect(()=>{
        if(digimons.length==0){
            
            dispatch(startLoadingDigimons({query}));
        }

        return ()=>{
            dispatch(clearData());
        }
    },[])
  
    const onClickLink= (page)=>{
        dispatch(startLoadingDigimons({query,page}));
    }
    return (
        <Layout>
            <DigimonsHeader query={query} totalElements={pageable.totalElements}/>
            <main >
            {
                isLoading ||  <DigimonList digimons={digimons}/> 
            }
            </main>
            <Pagination 
                itemsPerPage={8} 
                totalElements={pageable.totalElements || 0}
                onClickLink={onClickLink}

            />
        </Layout>
    )
}
