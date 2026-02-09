import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div className="hero-background">
                {/* Semicircle Glow */}
                <div className="semicircle-glow"></div>
                
                {/* Clouds */}
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
                <div className="cloud cloud-3"></div>
                <div className="cloud cloud-4"></div>
                
                <div
                    className="gradient-wave"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px) scaleX(1.5)`
                    }}
                ></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                   

                    <h1 className="hero-title animate-fade-in-up">
                        Launch Your Startup with AI Agents
                    </h1>

                    <p className="hero-description animate-fade-in-up">
                        Five specialized AI agents debate your idea from every angle — market, tech, legal, finance, and user perspective. Get a battle-tested plan before reality does the testing for you.
                    </p>

                    <div className="hero-actions animate-fade-in-up">
                        <button className="btn btn-primary btn-hero">
                            Get Started
                        </button>
                    </div>

                    <div className="hero-input-card animate-fade-in-up">
                        <input
                            type="text"
                            placeholder="Describe your startup idea..."
                            className="hero-input"
                        />
                        <div className="input-actions">
                            <button className="input-action-btn" aria-label="Add attachment">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 5V15M5 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                            <button className="input-action-btn" aria-label="Voice input">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10V5C12.5 3.61929 11.3807 2.5 10 2.5C8.61929 2.5 7.5 3.61929 7.5 5V10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" />
                                    <path d="M15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M10 15V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                            <button className="send-btn" aria-label="Send">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M17.5 2.5L8.75 11.25M17.5 2.5L12.5 17.5L8.75 11.25M17.5 2.5L2.5 7.5L8.75 11.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
