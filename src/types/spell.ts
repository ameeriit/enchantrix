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

interface DamageType {
  index: string;
  name: string;
  url: string;
}

interface DamageAtCharacterLevel {
  [key: string]: string;
}

interface Damage {
  damage_type: DamageType;
  damage_at_character_level: DamageAtCharacterLevel;
}

interface School {
  index: string;
  name: string;
  url: string;
}

interface Class {
  index: string;
  name: string;
  url: string;
}

interface Subclass {
  index: string;
  name: string;
  url: string;
}

export interface SpellDetail {
  higher_level: any[];
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: string[];
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: Damage;
  school: School;
  classes: Class[];
  subclasses: Subclass[];
  url: string;
}
