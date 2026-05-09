import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const saved =
      localStorage.getItem("wishlist");

    return saved
      ? JSON.parse(saved)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // ADD COUNTRY

  const addToWishlist = (
  university
) => {
  const exists =
    wishlist.find(
      (item) =>
        item.name ===
        university.name
    );

  if (!exists) {
    setWishlist([
      ...wishlist,
      university,
    ]);
  }
};

  // REMOVE COUNTRY

const removeFromWishlist = (
  name
) => {
  setWishlist(
    wishlist.filter(
      (item) =>
        item.name !== name
    )
  );
};

  // CHECK SAVED

const isSaved = (name) => {
  return wishlist.some(
    (item) =>
      item.name === name
  );
};

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isSaved,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(
    WishlistContext
  );
}