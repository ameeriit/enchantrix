"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ROUTES from "@/routes/routes";
import { Spell, SpellDetail } from "@/types/spell";

import { FavoriteIcon } from "@/icons/Icons";

interface ModalFavBtnProps {
  spellDetail: SpellDetail;
}

export default function ModalFavBtn({ spellDetail }: ModalFavBtnProps) {
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Check if the current spell detail URL is already in favorites when component mounts
    const favoritesJson = localStorage.getItem("favorites");
    if (favoritesJson) {
      const favorites = JSON.parse(favoritesJson);
      const isFavorite = favorites.some(
        (favorite: Spell) => favorite.index === spellDetail.index
      );
      setClicked(isFavorite);
    }
  }, [spellDetail.index]);

  const handleFavoriteClick = () => {
    if (pathname !== ROUTES.FAVORITE) {
      setClicked(!clicked);

      const spellDetailsObj = {
        index: spellDetail.index,
        url: spellDetail.url,
        name: spellDetail.name,
      };

      const favoritesJson = localStorage.getItem("favorites");
      let favorites = favoritesJson ? JSON.parse(favoritesJson) : [];

      const index = favorites.findIndex(
        (favorite: Spell) => favorite.index === spellDetail.index
      );

      if (index !== -1) {
        favorites.splice(index, 1);
      } else {
        favorites.push(spellDetailsObj);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  return (
    <FavoriteIcon
      className={`${
        clicked ? "fill-violet-600" : "fill-transparent"
      } transition-all stroke-violet-600`}
      onClick={handleFavoriteClick}
    />
  );
}
