import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container className="d-flex justify-content-center p-2">
          <Navbar.Brand href="#home" >
            <img
              src="https://static.vecteezy.com/system/resources/previews/009/373/580/original/business-icon-calculator-3d-illustration-png.png"
              width="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> <span style={{fontWeight:"900",fontSize:"30px",color:"blueviolet"}}>  Discount Calculator</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
