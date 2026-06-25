import { motion, useReducedMotion } from 'framer-motion';
import { IconArrowDown, IconArrowRight, IconMail } from '@tabler/icons-react';
import { profile } from '../data/profile';

function HeroBackdrop() {
    return (
        <svg
            aria-hidden
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid slice"
            style={{
                position: 'absolute', right: '-10%', top: '50%', transform: 'translateY(-50%)',
                width: 'min(62vw, 700px)', height: 'min(62vw, 700px)', opacity: 0.6, pointerEvents: 'none', zIndex: 0,
            }}
        >
            {[268, 206, 144, 86].map((r, i) => (
                <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="var(--blood)" strokeWidth="1" strokeOpacity={0.12 + i * 0.05} />
            ))}
            {[[300, 36], [300, 564], [36, 300], [564, 300], [112, 112], [488, 488], [488, 112], [112, 488]].map(([cx, cy], i) => (
                <g key={i}>
                    <line x1="300" y1="300" x2={cx} y2={cy} stroke="var(--line-2)" strokeWidth="1" />
                    <circle cx={cx} cy={cy} r="3" fill="var(--blood)" fillOpacity="0.6" />
                </g>
            ))}
        </svg>
    );
}

export function Hero() {
    const reduce = useReducedMotion();
    const anim = (delay: number) =>
        reduce ? {} : {
            initial: { opacity: 0, y: 24 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay },
        };

    const persona = (
        <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--blood)', boxShadow: '0 0 60px oklch(0.33 0.14 24 / 0.5)' }}>
                <img
                    src="/saber-alter.webp"
                    alt="Saber Alter, Dedrick's chosen persona, rendered in black and white"
                    className="inked"
                    style={{ width: '100%', display: 'block' }}
                />
                <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 42%, var(--ink-0) 100%), oklch(0.33 0.14 24 / 0.22)' }} />
            </div>
            <div aria-hidden style={{ position: 'absolute', top: -1, left: -1, width: 20, height: 20, borderTop: '2px solid var(--blood)', borderLeft: '2px solid var(--blood)' }} />
            <div aria-hidden style={{ position: 'absolute', bottom: -1, right: -1, width: 20, height: 20, borderBottom: '2px solid var(--blood)', borderRight: '2px solid var(--blood)' }} />
            <p className="mono" style={{ color: 'var(--ash-dim)', fontSize: '0.72rem', margin: '0.6rem 0 0' }}>
                // persona · saber alter
            </p>
        </div>
    );

    return (
        <section
            id="hero"
            style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '6rem', paddingBottom: '3rem' }}
        >
            <HeroBackdrop />
            <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
                <div>
                    <motion.div {...anim(0.05)}>
                        <p className="mono" style={{ display: 'flex', alignItems: 'center', gap: '0.6ch', fontSize: '0.85rem', color: 'var(--ash)', margin: '0 0 1.6rem' }}>
                            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blood)', boxShadow: '0 0 10px var(--blood)' }} />
                            {profile.availability} · {profile.location.split(',')[0]}, ID · {profile.timezone}
                        </p>
                    </motion.div>

                    <motion.div {...anim(0.15)}>
                        <h1 className="display" style={{ fontSize: 'var(--fs-hero)', color: 'var(--bone)', margin: 0 }}>
                            {profile.name.replace(/\.$/, '')}
                            <span style={{ color: 'var(--blood-bright)' }}>.</span>
                        </h1>
                    </motion.div>

                    <motion.div {...anim(0.28)}>
                        <p style={{ fontSize: 'var(--fs-h3)', fontWeight: 600, color: 'var(--ash)', margin: '1rem 0 0' }}>
                            {profile.roleTitle} <span style={{ color: 'var(--ash-dim)' }}>@</span>{' '}
                            <span style={{ color: 'var(--bone)', fontWeight: 700 }}>{profile.roleAt}</span>
                        </p>
                    </motion.div>

                    <motion.div {...anim(0.4)}>
                        <p className="pretty" style={{ maxWidth: '52ch', fontSize: 'var(--fs-lead)', color: 'var(--ash)', lineHeight: 1.6, margin: '1.25rem 0 0' }}>
                            {profile.tagline}
                        </p>
                    </motion.div>

                    <motion.div {...anim(0.5)}>
                        <p className="mono" style={{ fontSize: '0.8rem', color: 'var(--ash-dim)', margin: '1.25rem 0 0' }}>
                            AWS Solutions Architect · RHCSA · CCNA · Azure
                        </p>
                    </motion.div>

                    <motion.div {...anim(0.6)}>
                        <div style={{ borderLeft: '2px solid var(--blood)', paddingLeft: '1rem', margin: '1.75rem 0 0' }}>
                            <p className="mono" style={{ color: 'var(--blood-bright)', fontSize: '0.95rem', margin: 0 }}>{profile.signature}</p>
                        </div>
                    </motion.div>

                    <motion.div {...anim(0.72)}>
                        <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', margin: '1.75rem 0 0' }}>
                            <a href="#projects" className="btn btn-blood">View work <IconArrowRight size={17} /></a>
                            <a href="#contact" className="btn btn-ghost"><IconMail size={17} /> Get in touch</a>
                        </div>
                    </motion.div>
                </div>

                {reduce ? persona : (
                    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                        {persona}
                    </motion.div>
                )}
            </div>

            {!reduce && (
                <motion.a
                    href="#about" aria-label="Scroll to about"
                    animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', color: 'var(--ash-dim)', zIndex: 1 }}
                >
                    <IconArrowDown size={22} />
                </motion.a>
            )}
        </section>
    );
}
