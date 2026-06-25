import { useState } from 'react';
import { Reveal } from '../components';

/**
 * Full-bleed ethos statement. The Berserk skull (with its red Brand of Sacrifice)
 * bleeds in from the right; the line sits in the black negative space.
 * Hides itself if the image is missing, so it never ships empty.
 */
export function BerserkStatement() {
    const [ok, setOk] = useState(true);
    if (!ok) return null;

    return (
        <section className="statement" aria-label="Ethos">
            {/* preload + existence check (the visible image is a CSS background) */}
            <img src="/berserk/berserk-2.jpg" alt="" aria-hidden style={{ display: 'none' }} onError={() => setOk(false)} />

            <div className="statement-img" style={{ backgroundImage: 'url(/berserk/berserk-2.jpg)', filter: 'contrast(1.08)' }} aria-hidden />
            <div className="statement-veil" aria-hidden />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <Reveal>
                    <p className="mono" style={{ color: 'var(--blood-bright)', fontSize: '0.8rem', margin: 0 }}>// ethos</p>
                    <h2
                        className="display"
                        style={{ fontSize: 'clamp(2.2rem, 1.2rem + 4.6vw, 4.5rem)', color: 'var(--bone)', margin: '1rem 0 0', maxWidth: '16ch', textTransform: 'uppercase' }}
                    >
                        The struggle <span style={{ color: 'var(--blood-bright)' }}>is</span> the standard.
                    </h2>
                    <p className="pretty" style={{ color: 'var(--ash)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, maxWidth: '46ch', margin: '1.5rem 0 0' }}>
                        Reliable systems aren't found. They're forged, iteration after iteration. I treat
                        every pipeline, every deploy, and every alert as a thing to sharpen.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
