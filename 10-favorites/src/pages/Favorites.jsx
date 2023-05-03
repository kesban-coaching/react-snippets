import { useContext } from "react";
import { Context } from "../context/DataProvider";

export const Favorites = () => {
  // grba the favorites from the central data store (=context)
  const { favs } = useContext(Context);
  console.log(favs);

  return (
    <div className="favorites-page">
      <h2>Favorites page</h2>
      <div className="favorites">
        {favs.map((fav) => (
          <div key={fav.id}>{fav.title}</div>
        ))}
      </div>
    </div>
  );
};
