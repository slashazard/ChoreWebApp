import { ChangeEvent } from "react";

export type Chore = {
  name: string;
  completed: boolean;
};

export type Kid = {
  name: string;
  points: number;
  chores: Chore[];
};

export type KCDataContext = {
  kcdata: Kid[];
  choreCheckedHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};
