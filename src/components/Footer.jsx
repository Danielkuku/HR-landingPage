function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="section__container footer__container">
          <div className="footer__col">
            <div className="footer__logo">
              <a href="#" className="logo">
                Job<span>Find</span>
              </a>
            </div>
            <p>
              Our platform is designed to help you find the perfect job and
              achieve your professional dreams.
            </p>
          </div>
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul className="footer__links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Follow Us</h4>
            <ul className="footer__links">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact Us</h4>
            <ul className="footer__links">
              <li>
                <a href="#">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>{" "}
                  +2348051641240
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="ri-map-pin-2-fill"></i>
                  </span>{" "}
                  18, Akowonjo, Lagos, Nigeria.
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2024 Daniel Kuku. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
