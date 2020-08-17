import React, { FunctionComponent } from "react";
import { Chore } from "../types";
import { ChoreItem } from "./chore-item";

interface ChoreListProps {
  chores: Chore[];
}

export const ChoreList: FunctionComponent<ChoreListProps> = ({ chores }) => {
  return chores.length > 0 ? (
    <div>
      {chores.map((c) => {
        return <ChoreItem key={c.name} chore={c} />;
      })}
    </div>
  ) : (
    <span>No chores</span>
  );
};
