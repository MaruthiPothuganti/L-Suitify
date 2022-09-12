import "./footer.css";

export function Footer() {
  return (
    <footer className="footer flex-space-even">
      <div className="brand">
        <span className="heroLogo">L-Suitify</span>
      </div>
      <div className="gratitude">
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
    </footer>
  );
}
