import React from "react";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
  // MDBBtn,
  MDBBtnGroup,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-react-ui-kit";


import Verify from "./verified.png";
import Option from "./option.png"
import Save from "./download.png"
import Follow from "./follower.png"
import Block from "./block.png"
import Report from "./report.png"
import Exit from "./exit.png"

const MainCard = ({ children }) => {
  return (
    <div className="vh-100" style={{ backgroundColor: "#ffffff" }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="8" xl="12" className="mt-4">
            <MDBCard
              style={{ borderRadius: "15px", backgroundColor: "#ffffff" }}
            >
              <MDBCardBody className="p-4 text-black">
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: "70px" }}
                      className="img-fluid rounded-circle border border-dark border-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp"
                      alt="Generic placeholder image"
                      fluid
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <p className="mb-0 me-2">Saiteja Thoshakani</p>
                      <MDBCardImage
                        style={{ width: "30px" }}
                        className="img-fluid rounded-circle border border-2"
                        src={Verify}
                        alt="Generic placeholder image"
                        fluid
                      />
                      {/* DropDown Menu Options */}
                      <MDBBtnGroup style={{position:"relative", left:"40px"}}>
                        <MDBDropdown>
                          <MDBDropdownToggle style={{paddingRight:"10px", paddingLeft:"15px", backgroundColor:"#ffffff"}}><MDBCardImage
                        style={{ width: "20px" }}
                        className="img-fluid"
                        src={Option}
                        
                      /></MDBDropdownToggle>
                          <MDBDropdownMenu>
                            <MDBDropdownItem link><MDBCardImage style={{width:"25px", paddingRight:"5px"}} src={Save}/>
                              Save
                            </MDBDropdownItem>
                            <MDBDropdownItem link><MDBCardImage style={{width:"25px", paddingRight:"5px"}} src={Follow}/>
                              Follow
                            </MDBDropdownItem>
                            <MDBDropdownItem link><MDBCardImage style={{width:"25px", paddingRight:"5px"}} src={Block}/>
                              Block
                            </MDBDropdownItem>
                            <MDBDropdownItem link><MDBCardImage style={{width:"25px", paddingRight:"5px"}} src={Report}/>
                              Report
                            </MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBBtnGroup>
                    </div>
                    <div>
                      {/* ends here */}



                      <MDBTypography varient="h6">
                        Machine Learning Engineer
                      </MDBTypography>
                      {/* <MDBBtn outline color="dark" floating size="sm"><MDBIcon fas icon="tick" /></MDBBtn> */}
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: "#DEDEDE", height: "95px" }}>
                  <MDBTypography varient="h6">
                    Why do energy levels converge to a continuum and what is a
                    continuum?
                  </MDBTypography>
                </div>
                {/* <hr /> */}
                <div style={{ height: "135px" }}>
                  <MDBTypography varient="h6">
                    The continuum is simply a group of energy levels whose
                    energy gaps are negligibly small, and it is reached when the
                    kinetic energy of the electron(s) exceed the potential
                    energy that would trap them.
                  </MDBTypography>
                </div>
                {/* <MDBCardText>52 comments</MDBCardText> */}
                <MDBBtn color="white">
                  Liked <span style={{ marginLeft: ".9rem" }}>201</span>
                </MDBBtn>
                <span style={{ marginLeft: ".9rem" }} />
                <MDBBtn color="white">
                  Views <span style={{ marginLeft: ".9rem" }}>12K</span>
                </MDBBtn>
                <MDBCardImage style={{width:"20px", position:"relative", left:"70px", bottom:"5px"}} src={Exit}/>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default MainCard;
