import './CTA.css';

const CTA = () => {
    return (
        <section className="cta">
            <div className="cta-background">
                <div className="cta-orb cta-orb-1"></div>
                <div className="cta-orb cta-orb-2"></div>
            </div>

            <div className="container cta-container">
                <div className="cta-content">
                    <h2 className="cta-title">
                        Ready to Validate Your{' '}
                        <span className="gradient-text">Next Big Idea?</span>
                    </h2>
                    <p className="cta-description">
                        Join founders who test their assumptions with AI before investing months of work.
                        Get your battle-tested plan today.
                    </p>
                    <div className="cta-actions">
                        <button className="btn btn-primary btn-large">
                            Start Free Validation
                        </button>
                        <p className="cta-note">No credit card required • 5 minutes to get started</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
