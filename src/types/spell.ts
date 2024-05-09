import { ReactNode } from "react";

export interface SpellByLevel {
  [level: string]: Spell[];
}

export type SpellsByLevel = {
  [level: string]: Spell[];
};

export interface Spell {
  index: string;
  name: string;
  level: number;
  url: string;
}

export interface Favorites {
  [index: string]: boolean;
}

export interface ModalProps {
  children: ReactNode;
}

interface Damage {
  damage_type: Spell;
}

export interface SpellDetail {
  material: string;
  index: string;
  name: string;
  desc: string[];
  range: string;
  duration: string;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: Damage;
  school: Spell;
  url: string;
}
