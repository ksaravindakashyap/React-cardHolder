import React from "react";
import MainCard from "./components/card";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Header from "./components/navbar"

const App = () => {
  return (
    <div>
      <Header/>
          <MDBRow className='row-cols-1 row-cols-md-3 g-2'>
        <MDBCol>
          <MainCard />
        </MDBCol>
        <MDBCol>
          <MainCard/>
        </MDBCol>
        <MDBCol>
          <MainCard/>
        </MDBCol>
        <MDBCol>
          <MainCard/>
        </MDBCol>
        <MDBCol>
          <MainCard />
        </MDBCol>
        <MDBCol>
          <MainCard/>
        </MDBCol>
        <MDBCol>
          <MainCard/>
        </MDBCol>
      
      </MDBRow>
    </div>

  );
};

export default App;
