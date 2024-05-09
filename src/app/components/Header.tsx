import { Logo } from "@/icons/Icons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-violet-700">
      <div className="container mx-auto">
        <Link className="flex items-center pt-3 pb-2 gap-2" href="/">
          <Logo />
          <span className="text-violet-50 text-2xl font-semibold font-sedgwick">
            Enchantrix
          </span>
        </Link>
      </div>
    </header>
  );
}
