import { getSpellList } from "@/api/getSpellLists";
import { SpellLevel } from "@/icons/Icons";
import { Spell, SpellByLevel, SpellsByLevel } from "@/types/spell";
import Link from "next/link";

export default async function SpellList() {
  const spells = await getSpellList();

  // Group spells by level
  const spellsByLevel: SpellByLevel = spells.results.reduce(
    (acc: SpellByLevel, spell: Spell) => {
      const level = spell.level.toString();
      if (!acc[level]) {
        acc[level] = [];
      }
      acc[level].push(spell);
      return acc;
    },
    {} as SpellsByLevel
  );

  return (
    <section className="mb-8">
      <div className="container mx-auto">
        {Object.entries(spellsByLevel).map(([level, spells]) => (
          <div className="mb-6">
            <ul className="text-black mb-3" key={level}>
              <li className="gap-2 flex items-center">
                <SpellLevel />

                <p className="paragraph-2 text-3xl font-semibold underline">{`Spell level: ${level}`}</p>
              </li>
            </ul>

            <div className="columns-1 md:columns-2 lg:columns-3">
              <ol className="list-decimal pl-4">
                {spells.map((spell: Spell, spellIndex) => (
                  <li
                    className="text-2xl font-medium px-2 py-1  marker:text-violet-900"
                    key={`${spell.name}-${spellIndex}`}
                  >
                    <Link
                      href={`${spell.url}`}
                      className=" pl-2 pr-4 py-2 rounded-sm hover:bg-violet-50"
                    >
                      {spell.name}
                      <span className="text-xl font-normal">{` — ${spell.index}`}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
