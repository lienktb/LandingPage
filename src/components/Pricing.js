import React from "react";

export default function Pricing() {
  return (
    <section className="pricing mt-5">
      <div className="container  mt-5">
        <div className="row">
        <div className="col-0 col-lg-3"></div>
        <div className="col-12 col-lg-6">
          <div className="servce-top text-center ">
            <h2>OUR SERVICES</h2>
            <div className="section-title-border mt-4"></div>
            <p className="mt-4 mb-0 text-muted">
              Call to action pricing table is really crucial to your for your
              business website. Make your bids stand-out with amazing options.
            </p>
          </div>
        </div>
        <div className="col-0 col-lg-3"></div>
        </div>
      </div>
      <div className="pricing-item container mt-5">
        <div className="row">
          <div className="col-12 col-md-4 text-center ">
            <div className="card border-0 shadow m-2">
              <div className="card-body">
                <div className="card-top p-4">
                  <h6>ECONOMY</h6>
                  <h3>$9.90</h3>
                  <p className="text-muted">BILLING PER MONTH</p>
                  <hr></hr>
                </div>

                <div className="card-bottom">
                  <p>
                    Bandwidth: <b className="text-primary">1GB</b>
                  </p>
                  <p>
                    Onlinespace: <b className="text-primary">50MB</b>
                  </p>
                  <p>
                    Support: <b className="text-primary">No</b>
                  </p>
                  <p>
                    Domain: <b className="text-primary">1</b>
                  </p>
                  <p>
                    Hidden Fees: <b className="text-primary">No</b>
                  </p>
                </div>
                <a href="#" className="btn btn-primary my-3">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center ">
            <div className="card border-0 shadow m-2">
              <div className="card-body">
                <div className="card-top p-4">
                  <h6>DELUXE</h6>
                  <h3>$19.90</h3>
                  <p className="text-muted">BILLING PER MONTH</p>
                  <hr></hr>
                </div>

                <div className="card-bottom">
                  <p>
                    Bandwidth: <b className="text-primary">10GB</b>
                  </p>
                  <p>
                    Onlinespace: <b className="text-primary">500MB</b>
                  </p>
                  <p>
                    Support: <b className="text-primary">No</b>
                  </p>
                  <p>
                    Domain: <b className="text-primary">10</b>
                  </p>
                  <p>
                    Hidden Fees: <b className="text-primary">No</b>
                  </p>
                </div>
                <a href="#" className="btn btn-primary my-3">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center ">
            <div className="card border-0 shadow m-2">
              <div className="card-body">
                <div className="card-top p-4">
                  <h6>ULTIMATE</h6>
                  <h3>$29.90</h3>
                  <p className="text-muted">BILLING PER MONTH</p>
                  <hr></hr>
                </div>

                <div className="card-bottom">
                  <p>
                    Bandwidth: <b className="text-primary">100GB</b>
                  </p>
                  <p>
                    Onlinespace: <b className="text-primary">2 GB</b>
                  </p>
                  <p>
                    Support: <b className="text-primary">Yes</b>
                  </p>
                  <p>
                    Domain: <b className="text-primary">Unlimited</b>
                  </p>
                  <p>
                    Hidden Fees: <b className="text-primary">No</b>
                  </p>
                </div>
                <a href="#" className="btn btn-primary my-3">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
