import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarProfile from "./components/NavbarProfile";
import SkillDisplay from "./components/SkillDisplay";




const ProfilePage = () => {
    return(
        <div>
          <Navbar></Navbar>
          <div className="main-content">
          <NavbarProfile></NavbarProfile>
    {/* <!-- Page content --> */}
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
          <div className="card card-profile shadow">
            <div className="row justify-content-center">
              <div className="col-lg-3 order-lg-2">
                <div className="card-profile-image">
                  <a href="#">
                    <img src="" className="rounded-circle" alt="img"></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between">
                {/* <a href="#" className="btn btn-sm btn-info mr-4">Connmect</a>
                <a href="#" claclassNamess="btn btn-sm btn-default float-right">Message</a> */}
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
        <div className="col-xl-8 order-xl-1">
          <div className="card  shadow">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h3 className="mb-0">Mano duomenys</h3>
                </div>
              </div>
            </div>
            <div className="card-body">
              <form>
                <h6 className="heading-small text-muted mb-4">Pridėti technologiją</h6>
                <div className="pl-lg-4">
                <div class="col-md-12">
                <div class="form-group">
                 <input type="text" class="form-control" id="addSkillForm" placeholder="Įveskite technologiją"></input>
                </div>
                 </div>
                 <div className="col-4 text-right float-right">
                  <a href="#!" className="btn btn-sm btn-primary">Pridėti</a>
                </div>
              </div>
                {/* <hr className="my-4"></hr> */}
                {/* <h6 className="heading-small text-muted mb-4">About me</h6>
                <div className="pl-lg-4">
                  <div className="form-group">
                    <textarea rows="4" className="form-control form-control-alternative" placeholder="A few words about you ..."></textarea>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
            {/* <Footer></Footer> */}
        </div>
        
    );
}

export default ProfilePage;