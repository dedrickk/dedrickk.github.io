import { experiences } from '../data/profile';
import { SectionHeading, Reveal } from '../components';

export function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <SectionHeading
                    index="III"
                    title="Path"
                    lead="A path through infrastructure, cloud, and DevOps, from internships to platform work."
                />

                <div style={{ position: 'relative', paddingLeft: 32, marginTop: '3rem' }}>
                    <div
                        aria-hidden
                        style={{
                            position: 'absolute', left: 6, top: 10, bottom: 10, width: 1,
                            background: 'linear-gradient(to bottom, var(--blood), var(--blood-deep) 40%, var(--line) 100%)',
                        }}
                    />
                    {experiences.map((exp, i) => (
                        <Reveal key={`${exp.company}-${exp.title}`} delay={Math.min(i * 0.06, 0.3)}>
                            <div style={{ position: 'relative', paddingBottom: i === experiences.length - 1 ? 0 : 34 }}>
                                <span
                                    aria-hidden
                                    style={{
                                        position: 'absolute', left: -32, top: 6, width: 13, height: 13, borderRadius: '50%',
                                        background: exp.current ? 'var(--blood)' : 'var(--ink-0)',
                                        border: '2px solid var(--blood)',
                                        boxShadow: exp.current ? '0 0 12px var(--blood)' : 'none',
                                    }}
                                />
                                <div className="panel" style={{ padding: '1.4rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'flex-start' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6ch', flexWrap: 'wrap' }}>
                                                <span style={{ fontWeight: 700, color: 'var(--bone)', fontSize: '1.05rem' }}>{exp.title}</span>
                                                {exp.current && (
                                                    <span className="mono" style={{ color: 'var(--blood-bright)', fontSize: '0.68rem', border: '1px solid var(--blood)', padding: '1px 6px', textTransform: 'uppercase' }}>
                                                        current
                                                    </span>
                                                )}
                                            </div>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--blood-bright)', margin: '0.2rem 0 0' }}>{exp.company}</p>
                                        </div>
                                        <span className="mono" style={{ color: 'var(--ash-dim)', fontSize: '0.78rem' }}>{exp.period}</span>
                                    </div>
                                    <ul style={{ margin: '1rem 0 0', padding: 0, listStyle: 'none', display: 'grid', gap: '0.4rem' }}>
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} style={{ display: 'flex', gap: '0.7ch', color: 'var(--ash)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                                                <span style={{ color: 'var(--blood)', flexShrink: 0 }}>▪</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
