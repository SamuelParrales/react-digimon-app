import { Route, Routes } from "react-router-dom"
import { HomePage } from "../home/pages/HomePage"
import { DigimonRoutes } from "../digimon/routes/DigimonRoutes"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/digimons/*" element={<DigimonRoutes/>}/>
        <Route path="/*" element={<HomePage/>}/>
    </Routes>
  )
}
