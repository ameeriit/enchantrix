import ModalFavBtn from "./Buttons/ModalFavBtn";
import Modal from "./Modal";

import { SpellDetail } from "@/types/spell";

interface SpellDetailsProps {
  spellDetail: SpellDetail;
}

export default async function SpellDetails({ spellDetail }: SpellDetailsProps) {
  return (
    <Modal>
      <div className="flex flex-wrap gap-4">
        <div className="flex justify-between w-full items-center">
          <h5>
            <span className="font-sedgwick  text-3xl">Name:</span>{" "}
            {spellDetail?.name}
          </h5>
          <ModalFavBtn spellDetail={spellDetail} />
        </div>
        <div className="flex flex-col">
          {spellDetail?.range && (
            <h6>
              <span className="headerSpan">Range:</span> {spellDetail.range}
            </h6>
          )}
          {spellDetail?.material && (
            <h6>
              <span className="headerSpan">Material:</span>{" "}
              {spellDetail.material}
            </h6>
          )}
          {spellDetail?.duration && (
            <h6>
              <span className="headerSpan">Duration:</span>{" "}
              {spellDetail.duration}
            </h6>
          )}
          {spellDetail?.casting_time && (
            <h6>
              <span className="headerSpan">Casting Time::</span>{" "}
              {spellDetail.casting_time}
            </h6>
          )}
          {spellDetail?.attack_type && (
            <h6>
              <span className="headerSpan">Attack Type:</span>{" "}
              {spellDetail.attack_type}
            </h6>
          )}
          {spellDetail?.damage?.damage_type.name && (
            <h6>
              <span className="headerSpan">Damage Type:</span>{" "}
              {spellDetail.damage.damage_type.name}
            </h6>
          )}
          {spellDetail?.school.name && (
            <h6>
              <span className="headerSpan">School:</span>{" "}
              {spellDetail.school.name}
            </h6>
          )}
        </div>
        <p className="paragraph">{spellDetail?.desc}</p>
      </div>
    </Modal>
  );
}
