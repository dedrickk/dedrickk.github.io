import { IconCertificate } from '@tabler/icons-react';
import { certifications } from '../data/profile';
import { SectionHeading, Reveal } from '../components';

export function Certifications() {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <SectionHeading index="V" title="Marks" lead="Industry credentials across cloud, systems, and networking." />

                <div className="auto-grid" style={{ marginTop: '3rem' }}>
                    {certifications.map((cert, i) => (
                        <Reveal key={cert.name} delay={Math.min(i * 0.05, 0.25)}>
                            <div className="panel panel-hover" style={{ padding: '1.4rem', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                    <IconCertificate size={20} style={{ color: 'var(--blood)' }} />
                                    <span className="mono" style={{ color: 'var(--ash-dim)', fontSize: '0.72rem' }}>{cert.issuer}</span>
                                </div>
                                <p style={{ fontWeight: 700, color: 'var(--bone)', lineHeight: 1.35, margin: 0 }}>{cert.name}</p>
                                <p className="mono" style={{ color: 'var(--ash-dim)', fontSize: '0.74rem', margin: '0.75rem 0 0' }}>{cert.date}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
