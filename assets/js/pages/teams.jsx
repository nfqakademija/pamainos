import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarProfile from "./components/NavbarProfile";
import SkillDisplay from "./components/SkillDisplay";




const TeamsPage = () => {
    return(
        <div>
          <Navbar></Navbar>
          <div className="main-content">
          <NavbarProfile></NavbarProfile>
    {/* <!-- Page content --> */}
    <div className="container-fluid mt--7">
      <div className="row">
        {/* team1 */}
        <div className="col-xl-4 order-xl-2 mt-5 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                </div>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <h1>Komanda 1</h1>
                  </div>
                </div>
              </div>
              <div className="text-center">
                {/* <h3>
                  Jonas Jonaitis<span className="font-weight-light"></span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Kaunas
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Full stack developer 
                </div> */}
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Nariai</h6>
                <span className="badge badge-default mr-2">Petras Petraitis</span>
                  <span className="badge badge-default mr-2">Tomas Tomaitis</span>
                  <span className="badge badge-default mr-2">Domas Domaitis</span>
                  <span className="badge badge-default mr-2">John Doe</span>
                  <span className="badge badge-default mr-2">Lukas Lukaitis</span>
                  <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Team lead</h6>
                <span className="badge badge-default mr-2">Jonas Jonaitis</span>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Kita informacija</h6>
              </div>
            </div>
          </div>
        </div>
        {/* team2 */}
      </div>
      </div>
      </div>
        </div>
        
    );
}

export default TeamsPage;