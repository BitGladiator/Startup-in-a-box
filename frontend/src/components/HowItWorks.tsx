import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Describe Your Idea',
            description: 'Share your startup concept, target market, and initial assumptions with our AI agents.',
        },
        {
            number: '02',
            title: 'Agents Analyze & Debate',
            description: 'Five specialized agents examine your idea from different angles, challenging assumptions and finding risks.',
        },
        {
            number: '03',
            title: 'Converge on a Plan',
            description: 'Agents synthesize their debates into actionable recommendations, MVP scope, and clear next steps.',
        },
        {
            number: '04',
            title: 'Execute with Confidence',
            description: 'Launch with a battle-tested plan that addresses real concerns before they become problems.',
        },
    ];

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="section-description">
                        From idea to validated plan in four simple steps
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <defs>
                                            <linearGradient id="gradient" x1="5" y1="12" x2="19" y2="12">
                                                <stop offset="0%" stopColor="#38bdf8" />
                                                <stop offset="100%" stopColor="#06b6d4" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
