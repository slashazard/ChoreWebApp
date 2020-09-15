import React, { FunctionComponent, ChangeEvent } from "react";
import { Chore } from "../types";
import { ChoreItem } from "./chore-item";
import { Row } from "react-bootstrap";

interface ChoreListProps {
  chores: Chore[];
  handleCheckedChanged: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ChoreList: FunctionComponent<ChoreListProps> = ({
  chores,
  handleCheckedChanged,
}) => {
  return chores.length > 0 ? (
    <div>
      {chores.map((c, i) => {
        return (
          <ChoreItem
            key={c.name}
            index={i}
            chore={c}
            handleCheckedChanged={handleCheckedChanged}
          />
        );
      })}
    </div>
  ) : (
    <span>No chores</span>
  );
};
