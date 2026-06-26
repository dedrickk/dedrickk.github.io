import { projects } from '../data/profile';
import { SectionHeading, Reveal, ProjectDiagram, TechChip } from '../components';

const featured = projects.filter((p) => p.featured);
const secondary = projects.filter((p) => !p.featured);

export function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <SectionHeading
                    index="IV"
                    title="Work"
                    lead="Two recent platform builds, plus selected earlier work. Identifiers are sanitized; the engineering is real."
                />

                <div style={{ marginTop: '3.5rem' }}>
                    {featured.map((p, i) => (
                        <Reveal key={p.slug} delay={0.05}>
                            <article
                                style={{
                                    paddingTop: i === 0 ? 0 : '3.5rem',
                                    marginTop: i === 0 ? 0 : '3.5rem',
                                    borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                                }}
                            >
                                <div className="mono" style={{ display: 'flex', gap: '0.6ch', marginBottom: '0.4rem', fontSize: '0.8rem' }}>
                                    <span style={{ color: 'var(--blood-bright)' }}>{p.kind}</span>
                                    <span style={{ color: 'var(--ash-dim)' }}>· {p.period}</span>
                                </div>
                                <h3 className="display" style={{ fontSize: 'clamp(1.8rem, 1.2rem + 2.4vw, 2.8rem)', color: 'var(--bone)', margin: 0, textTransform: 'uppercase' }}>
                                    {p.title}
                                </h3>
                                <p className="pretty" style={{ color: 'var(--ash)', maxWidth: '70ch', lineHeight: 1.65, fontSize: 'var(--fs-lead)', margin: '0.75rem 0 0' }}>
                                    {p.summary}
                                </p>

                                {p.diagram && (
                                    <div style={{ marginTop: '2rem' }}>
                                        <ProjectDiagram kind={p.diagram} />
                                    </div>
                                )}

                                <div className="cols-2" style={{ marginTop: '2rem' }}>
                                    {p.highlights.map((h, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '0.7ch', alignItems: 'flex-start' }}>
                                            <span style={{ color: 'var(--blood)', flexShrink: 0, lineHeight: 1.5 }}>▸</span>
                                            <span style={{ color: 'var(--ash)', fontSize: '0.9rem', lineHeight: 1.55 }}>{h}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2rem' }}>
                                    {p.stack.map((s) => <TechChip key={s} label={s} />)}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.05}>
                    <p className="mono" style={{ color: 'var(--ash-dim)', fontSize: '0.8rem', margin: '4rem 0 1rem' }}>// selected earlier work</p>
                </Reveal>
                <div className="auto-grid">
                    {secondary.map((p, i) => (
                        <Reveal key={p.slug} delay={Math.min(i * 0.06, 0.25)}>
                            <div className="panel panel-hover" style={{ padding: '1.4rem', height: '100%' }}>
                                <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.35rem', fontSize: '0.72rem' }}>
                                    <span style={{ color: 'var(--blood-bright)' }}>{p.kind}</span>
                                    <span style={{ color: 'var(--ash-dim)' }}>{p.period}</span>
                                </div>
                                <h4 style={{ fontWeight: 700, color: 'var(--bone)', margin: 0, fontSize: '1.05rem' }}>{p.title}</h4>
                                <p style={{ fontSize: '0.88rem', color: 'var(--ash)', lineHeight: 1.55, margin: '0.5rem 0 0' }}>{p.summary}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1rem' }}>
                                    {p.stack.map((s) => <TechChip key={s} label={s} />)}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
