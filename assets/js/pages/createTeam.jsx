import React from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NavbarProfile from "./components/NavbarProfile";
import SkillDisplay from "./components/SkillDisplay";




const CreateTeamPage = () => {
    return(
      <div>
      <Navbar></Navbar>
      <div className="main-content">
      <NavbarProfile></NavbarProfile>
{/* <!-- Page content --> */}
<div className="container-fluid mt--7">
  <div className="row">
    <div className="col-xl-12 order-xl-1">
      <div className="card  shadow">
        <div className="card-header bg-white border-0">
          <div className="row align-items-center">
            <div className="col-8">
              <h3 className="mb-0">Komandos kūrimas</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form>
            {/* <h6 className="heading-small text-muted mb-4">Pridėti technologiją</h6> */}
            <hr className="my-4" />
            <div className="pl-lg-4">
            <div class="col-md-12">
            <div class="form-group">
             <input type="text" class="form-control mb-2" id="teamName" placeholder="Įveskite komandos pavadinimą" required></input>
             <input type="text" class="form-control mb-2" id="teamProject" placeholder="Įveskite projektą" required></input>
             <input type="text" class="form-control mb-2" id="teamLead" placeholder="Įveskite team lead" required></input>
             <input type="text" class="form-control mb-2" id="teamMembers" placeholder="Įveskite komandos narius" required></input>
             <textarea rows="4" className="form-control form-control-alternative" id="teamInfo" placeholder="Įveskite kitą informaciją" ></textarea>
            </div>
             </div>
             <div className="col-4 text-right float-right">
              <a href="#!" className="btn btn-sm btn-primary">Sukurti komandą</a>
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
    </div>
    );
}

export default CreateTeamPage;