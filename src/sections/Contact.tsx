import { IconBrandLinkedin, IconBrandGithub, IconMail, IconMapPin, IconArrowRight } from '@tabler/icons-react';
import { profile } from '../data/profile';
import { SectionHeading, Reveal } from '../components';

const channels = [
    { Icon: IconMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: IconBrandLinkedin, label: 'LinkedIn', value: 'in/dedrickk', href: profile.linkedin },
    { Icon: IconBrandGithub, label: 'GitHub', value: 'dedrickk', href: profile.github },
    { Icon: IconMapPin, label: 'Location', value: `${profile.location.split(',')[0]}, ${profile.timezone}`, href: null as string | null },
];

export function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <SectionHeading
                    index="VI"
                    title="Summon"
                    lead={`${profile.availability}. Reach out through any of these channels. I read every message.`}
                />

                <Reveal delay={0.1}>
                    <div style={{ margin: '2.5rem 0 2rem' }}>
                        <a href={`mailto:${profile.email}`} className="btn btn-blood">Email me <IconArrowRight size={17} /></a>
                    </div>
                </Reveal>

                <div className="cols-2">
                    {channels.map(({ Icon, label, value, href }, i) => {
                        const body = (
                            <div className={`panel ${href ? 'panel-hover' : ''}`} style={{ padding: '1.4rem', display: 'flex', gap: '1rem', alignItems: 'center', height: '100%' }}>
                                <Icon size={22} style={{ color: 'var(--blood)', flexShrink: 0 }} />
                                <div>
                                    <p className="mono" style={{ color: 'var(--ash-dim)', fontSize: '0.72rem', margin: 0 }}>{label}</p>
                                    <p style={{ fontWeight: 600, color: 'var(--bone)', margin: '0.15rem 0 0' }}>{value}</p>
                                </div>
                            </div>
                        );
                        return (
                            <Reveal key={label} delay={Math.min(i * 0.06, 0.24)}>
                                {href ? (
                                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{ display: 'block' }}>
                                        {body}
                                    </a>
                                ) : body}
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
