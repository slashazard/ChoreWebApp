import React, { useState, useEffect } from "react";
import { KidChoreDataContext, UpdateKidChoreDataContext } from "../contexts";
import { Kid } from "../types";

type Props = {
  children: React.ReactNode;
};
export const KCDataProvider = ({ children }: Props) => {
  const [data, setData] = useState<Kid[]>([]);

  useEffect(() => {
    console.log("Contet provider useEffect");
    if (!data || data.length === 0) {
      fetch("http://localhost:3004/kids")
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  });

  return (
    <KidChoreDataContext.Provider value={data}>
      <UpdateKidChoreDataContext.Provider value={setData}>
        {children}
      </UpdateKidChoreDataContext.Provider>
    </KidChoreDataContext.Provider>
  );
};
