import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProdutosProvider} from './contextAPI/ProdutosContext';
import { PedidosProvider} from './contextAPI/PedidosContext';
import { ItensPedidosProvider } from './contextAPI/ItensPedidosContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProdutosProvider>
      <PedidosProvider>
        <ItensPedidosProvider>
           <App />
        </ItensPedidosProvider>
      </PedidosProvider>
    </ProdutosProvider>  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
