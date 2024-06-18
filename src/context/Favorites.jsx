import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

// eslint-disable-next-line react/prop-types
const FavoritesProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([])
    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>

    )

    
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavoriteContext(){
    const {favorite, setFavorite} = useContext(FavoritesContext);

    const addFavorite = (newFavorite) => {
      
        const repeatFavorite = favorite.some( item => item.id === newFavorite.id);

        let newList = [...favorite];

        if(!repeatFavorite){
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        newList = favorite.filter((fav) => fav.id !== newFavorite.id);
        return setFavorite(newList);
    }

    return {
        favorite,
        addFavorite
    }

}

export default FavoritesProvider;


// export function useFavoritoContext(){
//     const { favorito, setFavorito } = useContext(FavoritosContext);
    
//     function adicionarFavorito(novoFavorito) {
//         const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)
        
//         let novaLista = [...favorito];
        
//         if(!favoritoRepetido) {
//             novaLista.push(novoFavorito);
//             return setFavorito(novaLista);
//         }
        
//         novaLista.splice(novaLista.indexOf(novoFavorito), 1);
//         return setFavorito(novaLista);
//     }
//     return {
//         favorito,
//         adicionarFavorito
//     }
// }
