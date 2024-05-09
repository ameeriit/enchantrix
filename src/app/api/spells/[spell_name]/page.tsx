import { getIndividualSpellDetails } from "@/api/getIndividualSpellDetails";
import SpellDetails from "@/app/components/SpellDetails";
import { SpellDetail } from "@/types/spell";

type PageProps = {
  params: { spell_name: string };
};

export default async function Page({ params }: PageProps) {
  const spellDetail: SpellDetail = await getIndividualSpellDetails(
    params.spell_name
  );

  return (
    <main>
      <SpellDetails spellDetail={spellDetail} />
    </main>
  );
}
