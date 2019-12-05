import React from "react";


const Footer = () => {
    return(
      <footer className="py-5">
      <div className="container">
        <div className="row align-items-center justify-content-xl-between">
          <div className="col-xl-6">
            <div className="copyright text-center text-xl-left text-muted">
              © 2019 <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Nfq akademija </a>
            </div>
          </div>
          <div className="col-xl-6">
            <ul className="nav nav-footer justify-content-center justify-content-xl-end">
              <li className="nav-item">
                <a href="" class="nav-link" target="_blank">Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer;