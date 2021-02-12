import React from 'react';
import './App.css';
import {lazy, Suspense} from 'react';

import Rotas from './Rotas';
import {BrowserRouter} from 'react-router-dom';

const Menu = lazy(() => import('./Pages/Componentes/Menu/Menu'));
const Footer = lazy(() => import('./Pages/Componentes/Rodape/Footer'));


function App() {
    
    return(
        
        <BrowserRouter>
            <div>
                <Rotas />

                <Suspense fallback={ <p>Carregando Menu...</p> }>
                <Menu />
                </Suspense>

                <Suspense fallback={ <p>Carregando Rodapé...</p> }>
                <Footer />
                </Suspense>
        

            </div>
        </BrowserRouter>
            
    );
   
}
export default App;
