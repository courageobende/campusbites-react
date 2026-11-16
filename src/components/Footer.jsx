import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>
            Campus<span>Bites.</span>
          </h2>
          <p>
            Delicious meals, affordable prices and convenient food delivery for
            students.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@campusbites.com</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Location: Ado-Ekiti, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CampusBites. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
