import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarProfile from "./components/NavbarProfile";
import SkillDisplay from "./components/SkillDisplay";




const EmployeesPage = () => {
    return(
        <div>
          <Navbar></Navbar>
          <div className="main-content">
          <NavbarProfile></NavbarProfile>
    {/* <!-- Page content --> */}
    <div className="container-fluid mt--7">
      <div className="row">
        {/* employee1 */}
        <div className="col-xl-4 order-xl-2 mt-5 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">5</span>
                      <span className="description">Technologijos</span>
                    </div>
                    <div>
                      <span className="heading">3</span>
                      <span className="description">Projektai</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Jonas Jonaitis<span className="font-weight-light"></span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Kaunas
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Full stack developer 
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Technologijos</h6>
                <span className="badge badge-default mr-2">PHP</span>
                  <span className="badge badge-default mr-2">Symfony</span>
                  <span className="badge badge-default mr-2">HTML</span>
                  <span className="badge badge-default mr-2">React</span>
                  <span className="badge badge-default mr-2">Redux</span>
                  <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Projektai</h6>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Komanda</h6>
              </div>
            </div>
          </div>
        </div>
        {/* employee2 */}
        <div className="col-xl-4 order-xl-2 mt-5 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">5</span>
                      <span className="description">Technologijos</span>
                    </div>
                    <div>
                      <span className="heading">2</span>
                      <span className="description">Projektai</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Petras Petraitis<span className="font-weight-light"></span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Kaunas
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Full stack developer 
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Technologijos</h6>
                <span className="badge badge-default mr-2">PHP</span>
                  <span className="badge badge-default mr-2">Symfony</span>
                  <span className="badge badge-default mr-2">HTML</span>
                  <span className="badge badge-default mr-2">React</span>
                  <span className="badge badge-default mr-2">Redux</span>
                  <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Projektai</h6>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Komanda</h6>
              </div>
            </div>
          </div>
        </div>
        {/* employee3 */}
        <div className="col-xl-4 order-xl-2 mt-5 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">8</span>
                      <span className="description">Technologijos</span>
                    </div>
                    <div>
                      <span className="heading">1</span>
                      <span className="description">Projektai</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Juozas Juozaitis<span className="font-weight-light"></span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Kaunas
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Back end developer 
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Technologijos</h6>
                <span className="badge badge-default mr-2">PHP</span>
                  <span className="badge badge-default mr-2">Symfony</span>
                  <span className="badge badge-default mr-2">HTML</span>
                  <span className="badge badge-default mr-2">React</span>
                  <span className="badge badge-default mr-2">Redux</span>
                  <span className="badge badge-default mr-2">Java</span>
                  <span className="badge badge-default mr-2">CSS</span>
                  <span className="badge badge-default mr-2">.NET</span>
                  <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Projektai</h6>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Komanda</h6>
              </div>
            </div>
          </div>
        </div>
        {/* employee4 */}
        <div className="col-xl-4 order-xl-2 mb-5 mt-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="../assets/img/theme/team-4-800x800.jpg" className="rounded-circle"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body pt-0 pt-md-4">
              <div className="row">
                <div className="col">
                  <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                      <span className="heading">5</span>
                      <span className="description">Technologijos</span>
                    </div>
                    <div>
                      <span className="heading">3</span>
                      <span className="description">Projektai</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3>
                  Tomas Tomaitis<span className="font-weight-light"></span>
                </h3>
                <div className="h5 font-weight-300">
                  <i className="ni location_pin mr-2"></i>Kaunas
                </div>
                <div className="h5 mt-4">
                  <i className="ni business_briefcase-24 mr-2"></i>Front end developer 
                </div>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Technologijos</h6>
                <span className="badge badge-default mr-2">CSS</span>
                  <span className="badge badge-default mr-2">VueJS</span>
                  <span className="badge badge-default mr-2">HTML</span>
                  <span className="badge badge-default mr-2">React</span>
                  <span className="badge badge-default mr-2">Redux</span>
                  <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Projektai</h6>
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Komanda</h6>
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

export default EmployeesPage;