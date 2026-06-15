'use client'; // Corrigido: Asas e ponto e vírgula

import { useEffect } from 'react'; // Corrigido: Asas na importação

export default function Dashboard(){
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token){
      window.location.href = '/login';
    }
  }, []);

  return <h1>Dashboard Protegido</h1>;
}