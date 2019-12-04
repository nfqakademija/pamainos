import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarProfile from "./components/NavbarProfile";
import SkillDisplay from "./components/SkillDisplay";




const ProjectsPage = () => {
    return(
        <div>
          <Navbar></Navbar>
          <div className="main-content">
          <NavbarProfile></NavbarProfile>
    {/* <!-- Page content --> */}
    <div className="container-fluid mt--7">
      <div className="row">
        {/* project1 */}
        <div className="col-xl-4 order-xl-2 mt-5 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                  <h1>Projektas 1</h1>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Komandos</h6>
                <span className="badge badge-default mr-2">Team1</span>
                  <span className="badge badge-default mr-2">Team2</span>
                  <span className="badge badge-default mr-2">Team3</span>
                  <span className="badge badge-default mr-2">Team4</span>
                  <span className="badge badge-default mr-2">Team5</span>
                  <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Kita informacija</h6>
                <p>Informacija apie projektą</p>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
        {/* project2 */}
        <div className="col-xl-4 order-xl-2 mt-5 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                  <h1>Projektas 2</h1>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Komandos</h6>
                <span className="badge badge-default mr-2">Team5</span>
                  <span className="badge badge-default mr-2">Team6</span>
                  <span className="badge badge-default mr-2">Team7</span>
                  <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Kita informacija</h6>
                <p>Informacija apie projektą</p>
                <hr className="my-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
        </div>
        
    );
}

export default ProjectsPage;