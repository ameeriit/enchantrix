"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import ROUTES from "@/routes/routes";
import { Spell } from "@/types/spell";

const FavoriteList = () => {
  const [favorites, setFavorites] = useState<Spell[]>([]);

  useEffect(() => {
    const favoritesJson = localStorage.getItem("favorites");
    if (favoritesJson) {
      setFavorites(JSON.parse(favoritesJson));
    }
  }, []);

  return (
    <section className="min-h-fav">
      <div className="container mx-auto">
        <div className="py-8">
          {favorites.length === 0 ? (
            <div className="flex items-center justify-center flex-col py-16 gap-14">
              <h2 className="text-center">No favorite spells</h2>
              <Link
                className="w-32 h-32 bg-violet-800 flex items-center justify-center text-white text-4xl rounded-full hover:bg-violet-950"
                href={ROUTES.HOME}
              >
                Go Home
              </Link>
            </div>
          ) : (
            <>
              <h2 className="text-violet-800">Favorite Spells</h2>
              <ul className="list-decimal pl-4">
                {favorites.map((favorite) => (
                  <li
                    className="text-2xl font-medium px-2 py-1  marker:text-violet-900"
                    key={favorite.index}
                  >
                    <Link
                      className="pl-2 pr-4 py-2 rounded-sm hover:bg-violet-200"
                      href={favorite.url}
                    >
                      {favorite.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FavoriteList;
