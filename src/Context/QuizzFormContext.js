import React, { createContext, useContext } from 'react';
import { useState } from 'react';

const QuizzFormContext = createContext();

export default QuizzFormContext;

export function QuizzContextProvider(props) {
  const [screen, setScreen] = useState(0);
  const [form,setForm] = useState({
    title:"",
    subject:"",
    questions:[],
    owner:"641d40e4e5a2bcc4935390a3"
  })
  const data = {
    screen,
    setScreen,
    form,
    setForm
  };

  return <QuizzFormContext.Provider value={data} {...props} />;
}

export function useQuizzContext() {
  const selectedContext = useContext(QuizzFormContext);

  // Verificar que el contexto este dentro del provider
  if (!selectedContext) {
    throw new Error('useQuizzContext debe estar dentro del provider');
  }

  return selectedContext;
}