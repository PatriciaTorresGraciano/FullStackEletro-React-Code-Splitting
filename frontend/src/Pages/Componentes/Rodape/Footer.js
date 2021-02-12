import React from 'react';
import "./footer.css";
import {lazy, Suspense} from 'react';


const FormasPagamento = lazy(() => import('../FormasPagamento/FormasPagamento'));

export default function Footer(){
    
    return(

    <div>
          <Suspense fallback={ <p>Carregando Formas de Pagamento...</p> }>
                <FormasPagamento />
                </Suspense>
        <p className="col text-white text-center bg-info" id="recodepro">&reg;Recode 2020</p>
    </div>
        
    );
    
}
