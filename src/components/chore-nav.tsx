import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Kid } from "../types";
import { Navbar, Nav } from "react-bootstrap";

interface ChoreNavProps {
  kids: Kid[];
  //handleNavClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ChoreNav: FunctionComponent<ChoreNavProps> = ({ kids }) => {
  return kids && kids.length > 0 ? (
    <Navbar bg="light" className="justify-content-center">
      <Nav variant="tabs">
        {kids.map((k) => {
          return (
            <Nav.Item className="m-2">
              <Link key={k.name} to={"/" + k.name}>
                {k.name}
              </Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Navbar>
  ) : (
    <div>Loading</div>
  );
};
