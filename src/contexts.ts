import React, { ChangeEvent } from "react";
import { Kid } from "./types";

export const KidChoreDataContext = React.createContext<Kid[]>([]);
export const UpdateKidChoreDataContext = React.createContext<
  React.Dispatch<React.SetStateAction<Kid[]>>
>(null);
