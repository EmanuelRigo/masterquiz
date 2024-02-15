import React from "react";
import { Row, Col } from "react-bootstrap";
import { GrReturn } from "react-icons/gr";
import { FaHouse } from "react-icons/fa6";

function FooterAside() {
  return (
    <footer className="d-flex flex-column vh-100 justify-content-end align-items-center">
      <h3 className="mb-auto">footer</h3>
      <div className="p-2">
        <FaHouse className="icon" />
        <GrReturn className="icon" />
      </div>
    </footer>
  );
}

export default FooterAside;
