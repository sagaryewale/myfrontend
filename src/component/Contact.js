import Base from "./Base";
import Footer from "./Footer";

const Contact = () => {
  return (
    <Base>
      <section>
        <div className="container">
          <div class="bg-light py-5">
            <div>
              <h2 className="text-center">
                <b>CONTACT US...</b> <br /> <br /> <br />
              </h2>
            </div>

            <div class="row text-center d-flex justify-content-center">
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src=""
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">Pune ShivajiNagar</h5>
                  <h6>Ph. 7387774573</h6>
                  <span class="small text-uppercase text-muted">
                    Office Address : CJ Heights,
                    <br />
                    Sadguru Corner,Shivajinagar, Pune : 415517{" "}
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <div class="col-xl-3 col-sm-6 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src=""
                    alt=""
                    width="100"
                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 class="mb-0">Pune Kothrud</h5>
                  <h6>Ph.9988774455</h6>
                  <span class="small text-uppercase text-muted">
                    {" "}
                    Address :Candent Heights,Chandani-chowk,Kothrud, Pune : 415510{" "}
                  </span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="social-link">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 class="font-weight-light">
                <b>Our Team Is Available On 24x7</b> <br />
                <br />
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Base>

  );
};
export default Contact;