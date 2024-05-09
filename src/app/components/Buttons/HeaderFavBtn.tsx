"use client";

import { FavoriteIcon } from "@/icons/Icons";
import ROUTES from "@/routes/routes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderFavBtn() {
  const router = useRouter();
  const pathname = usePathname();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (pathname === ROUTES.FAVORITE) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [pathname]);

  const handleFavoriteClick = () => {
    if (pathname !== ROUTES.FAVORITE) {
      setClicked(!clicked);
      router.push(ROUTES.FAVORITE);
    }
  };

  return (
    <FavoriteIcon
      className={`${
        clicked ? "fill-white" : "fill-transparent"
      } transition-all stroke-white`}
      onClick={handleFavoriteClick}
    />
  );
}
