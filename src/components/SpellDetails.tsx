import ModalFavBtn from "@/components/Buttons/ModalFavBtn";
import Modal from "@/components/Modal";
import { SpellDetail } from "@/types/spell";

interface SpellDetailsProps {
  spellDetail: SpellDetail;
}

export default function SpellDetails({ spellDetail }: SpellDetailsProps) {
  return (
    <Modal>
      <div className="flex flex-wrap gap-4">
        <div className="flex justify-between w-full items-center">
          <h5>
            <span className="font-sedgwick text-3xl">Name:</span>{" "}
            {spellDetail?.name}
          </h5>
          <ModalFavBtn spellDetail={spellDetail} />
        </div>
        <div className="flex flex-col">
          {renderSpellDetail("Range:", spellDetail?.range)}
          {renderSpellDetail("Material:", spellDetail?.material)}
          {renderSpellDetail("Duration:", spellDetail?.duration)}
          {renderSpellDetail("Casting Time:", spellDetail?.casting_time)}
          {renderSpellDetail("Attack Type:", spellDetail?.attack_type)}
          {renderSpellDetail(
            "Damage Type:",
            spellDetail?.damage?.damage_type.name
          )}
          {renderSpellDetail("School:", spellDetail?.school.name)}
        </div>
        <p className="paragraph">{spellDetail?.desc}</p>
      </div>
    </Modal>
  );
}

function renderSpellDetail(title: string, description?: string) {
  return (
    description && (
      <h6>
        <span className="headerSpan">{title}</span> {description}
      </h6>
    )
  );
}
