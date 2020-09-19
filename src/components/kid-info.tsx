import React, { FunctionComponent, ChangeEvent } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { Kid } from "../types";
import { UpdateKidChoreDataContext, KidChoreDataContext } from "../contexts";

interface KidInfoProps {
  kid: Kid;
}

export const KidInfo: FunctionComponent<KidInfoProps> = ({ kid }) => {
  const data = React.useContext(KidChoreDataContext);
  const setData = React.useContext(UpdateKidChoreDataContext);
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    let choreIndex = parseInt(e.currentTarget.id.split("-")[1], 10);
    let updateData = [...data];
    let kidIndex: number;
    data.forEach((k, i) => {
      if (k.name === kid.name) kidIndex = i;
    });
    updateData[kidIndex].chores[choreIndex].completed = !kid.chores[choreIndex]
      .completed;
    setData(updateData);
  };
  return kid ? (
    <div>
      <h1>
        {kid.name} - {kid.points} points
      </h1>
      <ButtonGroup vertical>
        {kid.chores.map(({ completed, name }, i) => {
          return (
            <Button
              style={
                completed
                  ? {
                      textDecorationLine: "line-through",
                      textDecorationStyle: "solid",
                    }
                  : null
              }
              variant={completed ? "success" : "secondary"}
              size="lg"
              className="m-1"
              key={i}
              value={i}
              id={"chore-" + i}
              onClick={handleClick}
            >
              {name}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  ) : (
    <div>No Kid Data</div>
  );
};
