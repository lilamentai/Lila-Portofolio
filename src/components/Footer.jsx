export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-border bg-bg-primary">
      <div className="container-custom">
        <p className="text-[0.85rem] text-text-subtle">
          Designed & built with <span className="text-primary">love</span> by Lila &copy; 2026
        </p>
        <div className="flex justify-center gap-5 mt-3">
          <a
            href="https://github.com/lilamentai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-base text-text-muted transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/brownieshy_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-base text-text-muted transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hamida-noor-kalila-2269b6387"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-base text-text-muted transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
