import './styles/global.css';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar, Footer, Cursor } from './components';
import { Hero, About, Skills, Experience, BerserkStatement, Projects, Certifications, Contact } from './sections';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const atmo = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        lenis.on('scroll', ScrollTrigger.update);
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        // Slow parallax drift on the atmospheric armour layer.
        const ctx = gsap.context(() => {
            if (atmo.current) {
                gsap.to(atmo.current, {
                    yPercent: 18,
                    scale: 1.12,
                    ease: 'none',
                    scrollTrigger: { start: 0, end: 'max', scrub: 1.2 },
                });
            }
        });

        return () => {
            ctx.revert();
            gsap.ticker.remove(tick);
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <div className="backdrop" aria-hidden />
            {/* Berserker-armour atmosphere — faint, screen-blended, bleeding from the top-right. */}
            <div
                ref={atmo}
                aria-hidden
                style={{
                    position: 'fixed',
                    top: '-8%',
                    right: '-10%',
                    width: 'min(72vw, 860px)',
                    height: 'min(82vh, 860px)',
                    backgroundImage: 'url(/berserk/berserk-1.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(1) brightness(0.7) contrast(1.25)',
                    opacity: 0.24,
                    mixBlendMode: 'screen',
                    WebkitMaskImage: 'radial-gradient(70% 72% at 62% 42%, #000 0%, transparent 82%)',
                    maskImage: 'radial-gradient(70% 72% at 62% 42%, #000 0%, transparent 82%)',
                    pointerEvents: 'none',
                    zIndex: -1,
                }}
            />
            <div className="grain" aria-hidden />
            <Cursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <BerserkStatement />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
