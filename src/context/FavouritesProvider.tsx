import { createContext, useContext, useEffect, useState } from "react";

const FavouritesContext = createContext(null);

function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState(
    () => JSON.parse(localStorage.getItem("favourites")) ?? [],
  );

  useEffect(
    function () {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    },
    [favourites],
  );

  return (
    <FavouritesContext.Provider value={{ favourites, setFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
}

function useFavourites() {
  return useContext(FavouritesContext);
}

export { FavouritesProvider, useFavourites };
