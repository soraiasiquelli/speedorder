import React, {createContext, useState, useEffect} from 'react'

export const ProdutosContext = createContext();

export function ProdutosProvider({children}){

    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    fetch("http://localhost:5001/cadastroprodutos")
    .then(res => res.json())
    .then(data => {
        setProdutos(data);
        setLoading(false)
    })
    .catch(() => setLoading(false))
    }, [])

    return(
        <ProdutosContext.Provider value={{produtos, setProdutos}}>
             {children}
    </ProdutosContext.Provider>
    )



}