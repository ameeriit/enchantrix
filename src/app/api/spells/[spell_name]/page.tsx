import { getIndividualSpellDetails } from "@/api/getIndividualSpellDetails";
import SpellDetails from "@/app/components/SpellDetails";
import LoadingSpinner from "@/app/components/loading/LoadingSpinner";
import { SpellDetail } from "@/types/spell";
import { Suspense } from "react";

type PageProps = {
  params: { spell_name: string };
};

export default async function Page({ params }: PageProps) {
  const spellDetail: SpellDetail = await getIndividualSpellDetails(
    params.spell_name
  );

  return (
    <main>
      <Suspense fallback={<LoadingSpinner />}>
        <SpellDetails spellDetail={spellDetail} />
      </Suspense>
    </main>
  );
}
