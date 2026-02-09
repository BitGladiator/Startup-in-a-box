import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect width="24" height="24" rx="6" fill="url(#footer-logo-gradient)" />
                                <path d="M12 6L18 12L12 18L6 12L12 6Z" fill="white" />
                                <defs>
                                    <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="24" y2="24">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="logo-text">Startup in a Box</span>
                        </div>
                        <p className="footer-tagline">
                            Your AI-powered founding team that challenges every assumption.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4 className="footer-heading">Product</h4>
                            <a href="#features" className="footer-link">Features</a>
                            <a href="#how-it-works" className="footer-link">How It Works</a>
                            <a href="#pricing" className="footer-link">Pricing</a>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">Company</h4>
                            <a href="#about" className="footer-link">About</a>
                            <a href="#blog" className="footer-link">Blog</a>
                            <a href="#contact" className="footer-link">Contact</a>
                        </div>

                        <div className="footer-column">
                            <h4 className="footer-heading">Legal</h4>
                            <a href="#privacy" className="footer-link">Privacy</a>
                            <a href="#terms" className="footer-link">Terms</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 Startup in a Box. Built with Gemini AI.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
