import { Route, Routes } from "react-router-dom"
import { DigimonPage, DigimonsPage } from "../pages"


export const DigimonRoutes = () => {
    return (
        <Routes>
            <Route path=":id" element={<DigimonPage/>} />
            <Route path="/*" element={<DigimonsPage/>} />
        </Routes>

    )
}
