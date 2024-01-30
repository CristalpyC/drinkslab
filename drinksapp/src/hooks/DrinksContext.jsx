import { createContext, useContext, useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'drinksInfo';

const DrinksInfoContext = createContext();

export const DrinksInfoProvider = ({ children }) => {
  const [drinksInfo, setDrinksInfo] = useState(null);

  // Cargar el valor almacenado en localStorage al montar el componente
  useEffect(() => {
    const storedDrinksInfo = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedDrinksInfo) {
      setDrinksInfo(JSON.parse(storedDrinksInfo));
    }
  }, []);

  // Actualizar localStorage cada vez que drinksInfo cambie
  useEffect(() => {
    if (drinksInfo) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(drinksInfo));
    }
  }, [drinksInfo]);

  return (
    <DrinksInfoContext.Provider value={{ drinksInfo, setDrinksInfo }}>
      {children}
    </DrinksInfoContext.Provider>
  );
};

export const useDrinksInfo = () => {
  const context = useContext(DrinksInfoContext);
  if (!context) {
    throw new Error('useDrinksInfo debe ser usado dentro de un DrinksInfoProvider');
  }
  return context;
};
