import React, { FunctionComponent, useState, ChangeEvent } from "react";
import { Chore } from "../types";
import { Row, InputGroup, FormControl, FormLabel } from "react-bootstrap";

interface ChoreItemProps {
  chore: Chore;
  handleCheckedChanged: (e: ChangeEvent<HTMLInputElement>) => void;
  index: number;
}

export const ChoreItem: FunctionComponent<ChoreItemProps> = ({
  chore: { name, completed },
  handleCheckedChanged,
  index,
}) => {
  return (
    <Row>
      <InputGroup className="m-5">
        <InputGroup.Prepend>
          <InputGroup.Checkbox
            className="m-5"
            aria-label={name}
            onChange={handleCheckedChanged}
            checked={completed}
            id={"chore-" + index.toString()}
          />
        </InputGroup.Prepend>
        <FormLabel className="col-3 m-5 border">{name}</FormLabel>
      </InputGroup>
    </Row>
  );
};
