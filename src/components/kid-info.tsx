import React, { FunctionComponent, ChangeEvent } from "react";
import { Kid } from "../types";
import { ChoreList } from "./chore_list";
import { UpdateKidChoreDataContext, KidChoreDataContext } from "../contexts";

interface KidInfoProps {
  kid: Kid;
}

export const KidInfo: FunctionComponent<KidInfoProps> = ({ kid }) => {
  const data = React.useContext(KidChoreDataContext);
  const setData = React.useContext(UpdateKidChoreDataContext);
  const handleCheckedChanged = (e: ChangeEvent<HTMLInputElement>) => {
    let choreIndex = parseInt(e.currentTarget.id.split("-")[1], 10);
    let updateData = [...data];
    let kidIndex: number;
    data.forEach((k, i) => {
      if (k.name === kid.name) kidIndex = i;
    });
    updateData[kidIndex].chores[choreIndex].completed = e.currentTarget.checked;
    setData(updateData);
  };
  return kid ? (
    <div>
      <h1>
        {kid.name} - {kid.points} points
      </h1>
      <ChoreList
        chores={kid.chores}
        handleCheckedChanged={handleCheckedChanged}
      />
    </div>
  ) : (
    <div>No Kid Data</div>
  );
};
