import { Suspense } from "react";
import BannerTitle from "./components/BannerTitle";
import SpellList from "./components/SpellList";
import LoadingSpinner from "./components/loading/LoadingSpinner";

export default function Home() {
  return (
    <main>
      <BannerTitle title=" Welcome to Spells Book" />
      <Suspense fallback={<LoadingSpinner />}>
        <SpellList />
      </Suspense>
    </main>
  );
}
