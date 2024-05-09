"use client";

import { FavoriteIcon } from "@/icons/Icons";
import ROUTES from "@/routes/routes";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function ModalFavBtn() {
  const router = useRouter();
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);

  const handleFavoriteClick = () => {
    if (pathname !== ROUTES.FAVORITE) {
      setClicked(!clicked);
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
