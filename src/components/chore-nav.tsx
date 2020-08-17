import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Kid } from "../types";

interface ChoreNavProps {
  kids: Kid[];
  //handleNavClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ChoreNav: FunctionComponent<ChoreNavProps> = ({ kids }) => {
  return kids && kids.length > 0 ? (
    <div>
      <span>
        {kids.map((k) => {
          return (
            <Link key={k.name} to={"/" + k.name}>
              --{k.name}--
            </Link>
          );
        })}
      </span>
    </div>
  ) : (
    <div>Loading</div>
  );
};
