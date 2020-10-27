import React, { useState, useEffect, FunctionComponent } from "react";
import { KidChoreDataContext, UpdateKidChoreDataContext } from "../contexts";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Kid } from "../types";

interface ChoreHomeProps {}

export const ChoreHome: FunctionComponent<ChoreHomeProps> = () => {
  const data = React.useContext(KidChoreDataContext);
  return (
    <div>
      <ButtonGroup vertical>
        {data.map((kid) => {
          return (
            <Link to={"/" + kid.name}>
              <Button size="lg" className="m-3" color="primary">
                {kid.name}
              </Button>
            </Link>
          );
        })}
      </ButtonGroup>
    </div>
  );
};
