import React, { FunctionComponent, useState, ChangeEvent } from "react";
import { Chore } from "../types";
import { Row } from "react-bootstrap";

interface ChoreItemProps {
  chore: Chore;
  //onChange: ChangeEvent<HTMLInputElement>;
}

export const ChoreItem: FunctionComponent<ChoreItemProps> = ({
  chore: { name, completed },
  //onChange,
}) => {
  const [done, setDone] = useState(completed);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Check changed: target:", e.target);
    setDone(e.target.checked);
  };
  return (
    <Row>
      <input
        className="col-3"
        type="checkbox"
        checked={done}
        onChange={handleChange}
      />
      <span className="col-3 border">{name}</span>
    </Row>
  );
};
