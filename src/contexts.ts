import React, { ChangeEvent } from "react";
import { Kid } from "./types";

interface KCDataState {
  kcdata: Kid[];
  //choreCheckedHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const KidChoreDataContext = React.createContext<Kid[]>([]);

// export const KidChoreDataContext = React.createContext<KCDataState>({
//   kcdata: [],
//   //   choreCheckedHandler: (e) => {
//   //     console.log("Context handler", e.currentTarget);
//   //   },
// });
