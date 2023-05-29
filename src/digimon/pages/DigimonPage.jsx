import { useParams } from "react-router-dom";
import { Layout } from "../../layouts/Layout"
import { useDispatch, useSelector } from "react-redux";
import { startLoadingDigimon } from "../../store/digimon/thunks";
import { useEffect } from "react";
import { Digimon } from "../components/Digimon";
import { clearActiveDigimon } from "../../store/digimon/digimonSlice";
import { BtnBack } from "../../components/BtnBack";


export const DigimonPage = () => {
    // Hooks
    const { id } = useParams();
    const dispatch = useDispatch();
    const { activeDigimon: digimon } = useSelector(state => state.digimon)
    // End hooks



    useEffect(() => {
        dispatch(startLoadingDigimon(id));

        return () => {
            dispatch(clearActiveDigimon());
        }
    }, [])

    return (
        <Layout>
            <div className="container">
                <BtnBack />
            </div>
            <main >
                {
                    !digimon || <Digimon digimon={digimon} />
                }


            </main>
        </Layout>
    )
}
