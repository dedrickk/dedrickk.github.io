import { IconMapPin, IconBriefcase } from '@tabler/icons-react';
import { profile, education } from '../data/profile';
import { SectionHeading, Reveal } from '../components';

export function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <SectionHeading index="I" title="About" />

                <div className="split" style={{ marginTop: '3rem' }}>
                    <Reveal delay={0.1}>
                        <p className="pretty" style={{ fontSize: 'var(--fs-lead)', color: 'var(--ash)', lineHeight: 1.78, maxWidth: '60ch', margin: 0 }}>
                            {profile.summary}
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5ch', color: 'var(--ash)', fontSize: '0.9rem' }}>
                                <IconMapPin size={18} style={{ color: 'var(--blood)' }} /> {profile.location}
                            </span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5ch', color: 'var(--ash)', fontSize: '0.9rem' }}>
                                <IconBriefcase size={18} style={{ color: 'var(--blood)' }} /> {profile.roleTitle} @ {profile.roleAt}
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="panel" style={{ padding: '1.75rem' }}>
                            <p className="mono" style={{ color: 'var(--ash-dim)', fontSize: '0.78rem', margin: '0 0 0.75rem' }}>// education</p>
                            <p style={{ fontWeight: 700, color: 'var(--bone)', margin: 0 }}>{education.institution}</p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--ash)', margin: '0.35rem 0 0' }}>
                                {education.degree} · {education.field}
                            </p>
                            <div className="mono" style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', fontSize: '0.8rem' }}>
                                <span style={{ color: 'var(--ash-dim)' }}>{education.period}</span>
                                <span style={{ color: 'var(--blood-bright)' }}>GPA {education.gpa}</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
