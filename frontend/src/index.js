import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider>
 <App/>
 </Context.Provider>,
 document.getElementById('root')
);

// ReactDOM.render(
//     <Context.Provider value={{
        
//         //device: new DeviceStore(),
//     }}>
//         <App />
//     </Context.Provider>,
//   document.getElementById('root')
// );


