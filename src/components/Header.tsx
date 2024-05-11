import Link from "next/link";

import ROUTES from "@/routes/routes";

import HeaderFavBtn from "@/components/Buttons/HeaderFavBtn";
import { Logo } from "@/icons/Icons";

export default function Header() {
  return (
    <header className="bg-violet-700">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link
              className="flex items-center pt-3 pb-2 gap-2"
              href={ROUTES.HOME}
            >
              <Logo />
              <span className="text-violet-50 text-2xl font-semibold font-sedgwick">
                Enchantrix
              </span>
            </Link>
          </div>
          <HeaderFavBtn />
        </div>
      </div>
    </header>
  );
}
