import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const JsonContext = React.createContext();

export function useJson() {
  return useContext(JsonContext);
}

export const JsonProvider = ({ children }) => {
  const [productRequests, setProductRequests] = useLocalStorage(
    'productRequests',
    []
  );

  function loadJsonToLocaleStorage(jsonData) {
    setProductRequests('productRequests', [...jsonData]);
    console.log(jsonData);
  }

  return (
    <JsonContext.Provider value={{ productRequests, loadJsonToLocaleStorage }}>
      {children}
    </JsonContext.Provider>
  );
};
