import "./footer.css";

export function Footer() {
  return (
    <footer className="footer flex-space-even">
      <div className="gratitude">
        <div className="brand">
          <span className="heroLogo">L-Suitify</span>
        </div>
        <p> Matching style and class with luxury and comfort. </p>
        <div>
          <p>©2021, All rights Reserved.</p>
          <p>
            Code by{" "}
            <a
              className="footer-link"
              href="https://maruthipothuganti.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Maruthi Pothuganti
            </a>
          </p>
        </div>
      </div>
      <div className="footer-links">
        <h2>Categories</h2>
        <ul>
          <li className="footer-link">Tops</li>
          <li className="footer-link">Trousers</li>
          <li className="footer-link">Blazers</li>
          <li className="footer-link">Suits</li>
          <li className="footer-link">Miscellaneuos</li>
        </ul>
      </div>
      <div className="footer-links">
        <h2>Account</h2>
        <ul>
          <li className="footer-link">My Account</li>
          <li className="footer-link">Wishlist</li>
          <li className="footer-link">Cart</li>
          <li className="footer-link">Track Order</li>
          <li className="footer-link">Cancellation Policy</li>
        </ul>
      </div>

      <div className="socials">
        <h2>Socials</h2>
        <ul>
          <li>
            <i className="fa-brands fa-github"></i>
            <a
              className="footer-link"
              href="https://github.com/MaruthiPothuganti/"
              target="_blank"
              rel="noreferrer"
            >
              @MaruthiPothuganti
            </a>
          </li>
          <li>
            <i className="fa-brands fa-linkedin"></i>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/maruthi-pothuganti-3a8575179/"
              target="_blank"
              rel="noreferrer"
            >
              @maruthipothuganti
            </a>
          </li>
          <li>
            <i className="fa-brands fa-twitter"></i>
            <a
              className="footer-link"
              href="https://twitter.com/maruthithedev"
              target="_blank"
              rel="noreferrer"
            >
              @maruthithedev
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
