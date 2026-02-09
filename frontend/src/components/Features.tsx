import './Features.css';

const Features = () => {
    const features = [
        {
            title: 'Multi-Perspective Analysis',
            description: 'Five specialized AI agents analyze your startup from market, user, tech, legal, and financial perspectives.',
        },
        {
            title: 'Intelligent Debate System',
            description: 'Agents challenge each other\'s assumptions, creating productive disagreement that strengthens your plan.',
        },
        {
            title: 'Actionable Insights',
            description: 'Get concrete next steps, risk assessments, and MVP scope—not just theoretical advice.',
        },
        {
            title: 'Rapid Validation',
            description: 'Go from idea to validated plan in minutes, not months of trial and error.',
        },
        {
            title: 'Long-Context Reasoning',
            description: 'Powered by Gemini\'s advanced AI, maintaining context across complex discussions.',
        },
        {
            title: 'Learning System',
            description: 'Each agent learns from debates and improves recommendations over time.',
        },
    ];

    return (
        <section id="features" className="features">
            <div className="container">
                <div className="features-header">
                    <h2 className="features-title">
                        Everything You Need to <span className="gradient-text">Validate Fast</span>
                    </h2>
                    <p className="features-description">
                        Stop guessing. Start building with confidence using AI agents that see what you can't.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
