import React, { FunctionComponent } from "react";
import { Chore } from "../types";
import { ChoreItem } from "./chore-item";
import { Form } from "react-bootstrap";

interface ChoreListProps {
  chores: Chore[];
}

export const ChoreList: FunctionComponent<ChoreListProps> = ({ chores }) => {
  return chores.length > 0 ? (
    <Form className="checkbox-inline">
      {chores.map((c) => {
        return <ChoreItem key={c.name} chore={c} />;
      })}
    </Form>
  ) : (
    <span>No chores</span>
  );
};
