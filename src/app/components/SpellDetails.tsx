import { SpellDetail } from "@/types/spell";
import Modal from "./Modal";

interface SpellDetailsProps {
  spellDetail: SpellDetail;
}

export default async function SpellDetails({ spellDetail }: SpellDetailsProps) {
  return (
    <Modal>
      <div className="flex flex-wrap gap-4">
        <div className="bg-blue-500 text-white p-2 rounded-md">
          <span className="font-bold">Name:</span> {spellDetail?.name}
        </div>
        <div className="bg-green-500 text-white p-2 rounded-md">
          <span className="font-bold">Description:</span> {spellDetail?.desc}
        </div>
        <div className="bg-yellow-500 text-white p-2 rounded-md">
          <span className="font-bold">Range:</span> {spellDetail?.range}
        </div>
        <div className="bg-red-500 text-white p-2 rounded-md">
          <span className="font-bold">Duration:</span> {spellDetail?.duration}
        </div>
        <div className="bg-purple-500 text-white p-2 rounded-md">
          <span className="font-bold">Casting Time:</span>{" "}
          {spellDetail?.casting_time}
        </div>
        <div className="bg-indigo-500 text-white p-2 rounded-md">
          <span className="font-bold">Attack Type:</span>{" "}
          {spellDetail?.attack_type}
        </div>
        <div className="bg-pink-500 text-white p-2 rounded-md">
          <span className="font-bold">Damage Type:</span>{" "}
          {spellDetail?.damage?.damage_type.name}
        </div>
        <div className="bg-orange-500 text-white p-2 rounded-md">
          <span className="font-bold">School:</span> {spellDetail?.school.name}
        </div>
      </div>
    </Modal>
  );
}
