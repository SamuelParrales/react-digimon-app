

import {BrowserRouter}from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { getEnvVariables } from './helpers/getEnvVariables';
export const DigimonApp = () => {
  const {BASE_URL} = getEnvVariables();

  return (
    <BrowserRouter
      basename={BASE_URL} 
    >
      <AppRouter/>
    </BrowserRouter>
  )
}
