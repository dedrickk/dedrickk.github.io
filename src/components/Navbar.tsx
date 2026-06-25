import { useEffect, useState } from 'react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { profile } from '../data/profile';

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: scrolled ? 'color-mix(in oklch, var(--ink-0) 82%, transparent)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
                transition: 'background 0.3s var(--ease), border-color 0.3s var(--ease)',
            }}
        >
            <div
                className="container"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBlock: '1rem' }}
            >
                <a href="#hero" className="mono" style={{ fontWeight: 700, letterSpacing: '0.04em', color: 'var(--bone)' }}>
                    <span style={{ color: 'var(--blood)' }}>✶</span> DEDRICK
                </a>

                <div className="nav-links mono" style={{ display: 'flex', gap: '1.4rem' }}>
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{ fontSize: '0.8rem', color: 'var(--ash)', transition: 'color 0.2s var(--ease)' }}
                            onMouseOver={(e) => (e.currentTarget.style.color = 'var(--blood-bright)')}
                            onMouseOut={(e) => (e.currentTarget.style.color = 'var(--ash)')}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--ash)', display: 'flex' }}>
                        <IconBrandLinkedin size={20} />
                    </a>
                    <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--ash)', display: 'flex' }}>
                        <IconBrandGithub size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
