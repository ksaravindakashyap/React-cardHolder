import React from "react";
import { MDBBtn, MDBBtnGroup,MDBCardImage } from "mdb-react-ui-kit";

import Add from "./add.png"

const Header = () => {
  return (
    <div style={{marginTop:"15px"}}>
      <MDBBtnGroup style={{position:"Relative", left:"15px"}}>
        <MDBBtn href="#" active style={{backgroundColor:"#467F58", color:"black"}}>
          Write-ups
        </MDBBtn>
        <MDBBtn href="#" style={{backgroundColor:"#D0D0D0", color:"black"}}>Forums</MDBBtn>
      </MDBBtnGroup>
      <MDBBtnGroup style={{position:"Relative", left:"45px"}}>
        <MDBBtn href="#" style={{backgroundColor:"#D0D0D0", color:"black"}}>New<MDBCardImage style={{width:"25px", position:"relative", left:"10px"}} src={Add}/></MDBBtn>
      </MDBBtnGroup>
    </div>
  );
};

export default Header;
