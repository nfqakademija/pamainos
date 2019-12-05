import React from "react";
import { Link } from "react-router-dom";

const CLASSES = {
section: "section section-shaped section-lg",

}

const LoginForm = () => {

    return(
        <main className="bg-gradient-primary px-8 py-8 ">
    <section className="section section-shaped section-xl px-8 py-8 ">
      <div className="container pt-lg-md px-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card bg-secondary shadow border-0">
              <div className="card-header bg-white pb-5">
                <div className="text-muted align-middle text-center mb-3"><h6 className="text-muted align-middle mt-5">Prisijungimas prie NFQ pamainų sistemos</h6></div>
              </div>
              <div className="card-body bg-grayish bg-px-lg-5 py-lg-5">
                <form>
                  <div className="form-group mb-3">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                      </div>
                      <input className="form-control" placeholder="El. paštas" type="email"></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                      </div>
                      <input className="form-control" placeholder="Slaptažodis" type="password"></input>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-primary my-4">Prisijungti</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
    );
};

export default LoginForm;