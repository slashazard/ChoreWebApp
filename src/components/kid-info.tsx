import React, { FunctionComponent } from "react";
import { Kid } from "../types";
import { ChoreList } from "./chore_list";

interface KidInfoProps {
  kid: Kid;
}

export const KidInfo: FunctionComponent<KidInfoProps> = ({ kid }) => {
  return kid ? (
    <div>
      <h1>
        {kid.name} - {kid.points} points
      </h1>
      <ChoreList chores={kid.chores} />
    </div>
  ) : (
    <div>No Kid Data</div>
  );
};
