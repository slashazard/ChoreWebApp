import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Kid } from "../types";
import { Navbar, Nav } from "react-bootstrap";

interface ChoreNavProps {
  kids: Kid[];
}

export const ChoreNav: FunctionComponent<ChoreNavProps> = ({ kids }) => {
  return kids && kids.length > 0 ? (
    <Navbar bg="light" className="justify-content-center">
      <Nav variant="tabs">
        {kids.map((k, i) => {
          return (
            <Nav.Item key={i} className="m-2">
              <Link to={"/" + k.name}>{k.name}</Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Navbar>
  ) : (
    <div>Loading</div>
  );
};
